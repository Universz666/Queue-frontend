import { React, useState, useEffect } from "react";
import { Flex, Box } from "reflexbox";
import { useRouter } from "next/router";
import { Input, Button, message, Upload, Select, Row, Col } from "antd";
import { CloudUploadOutlined, NotificationOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";

import { register_Users } from "../../../pages/api";

function StudentForm() {
  const router = useRouter();
  const [provincedata, setProvinceData] = useState(null);

  const [authdata, setAuthdata] = useState();
  const [filename, setFilename] = useState();
  const [fullname, setFullname] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState();

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("eventdata"));
    // console.log(item)
    if (item) {
      setEventData(item);
    }
  }, []);
  const [eventdata, setEventData] = useState();

  useEffect(() => {
    fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces")
      .then((res) => res.json())
      .then((data) => {
        setProvinceData(data.data);
      });
  }, []);

  const { data: session } = useSession();

  const provinceArray = [];
  if (provincedata) {
    for (let i = 0; i < provincedata.length; i++) {
      // console.log(provincedata[i]);
      provinceArray.push(provincedata[i].province);
    }
  }

  const provinceChange = (value) => {
    setProvince(value);
  };

  const props = {
    filename: "file",
    action: "http://localhost:8000/api/v1/register-students/uploadfile",
    header: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        setFilename(info.file?.response.portfilename);
        // console.log(info.file);
      }
      if (info.file.status === "done") {
        message.success(`File uploaded successfully`);
      } else if (info.file.filename === "error") {
        message.error(`$File upload failed.`);
      }
    },
  };

  const handleRegister = async () => {
    const payLoad = {
      email: session?.user.email,
      username: session?.user.name,
      fullName: fullname,
      role: "student",
      phone: phone,
      school: school,
      province: province,
      file: filename,
    };
    console.log(payLoad);
    const requrl = eventdata.requrl;

    try {
      await register_Users(payLoad).then((respones) => {
        if (respones.status == 201) {
          console.log("respone ===>", respones);
          // router.replace("/event/" + requrl);
          window.location.replace("/event/" + requrl);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Row>
      <Flex flexDirection="column">
        <Flex>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Flex className="input-regist" justifyContent="end">
              <Box>
                <p className="font-regist">ชื่อ-นามสกุล </p>
              </Box>
              <Box>
                <Input
                  style={{ width: "200px" }}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </Box>
            </Flex>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Flex
              className="input-regist"
              justifyContent="start"
              style={{ marginLeft: "40px" }}
            >
              <Box>
                <p className="font-regist">โรงเรียน </p>
              </Box>
              <Box>
                <Input onChange={(e) => setSchool(e.target.value)} />
              </Box>
            </Flex>
          </Col>
        </Flex>
        <Flex>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Flex className="input-regist" justifyContent="end">
              <Box>
                <p className="font-regist">เบอร์โทรศัพท์ </p>
              </Box>
              <Box>
                <Input
                  style={{ width: "200px" }}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
            </Flex>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Flex
              className="input-regist"
              justifyContent="start"
              style={{ marginLeft: "40px" }}
            >
              <Box>
                <Upload {...props}>
                  <Button
                    className="btn-login"
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      padding: "0px 10px 0px 10px",
                    }}
                  >
                    <CloudUploadOutlined />
                    อัพโหลดไฟล์ Portfolio
                  </Button>
                </Upload>
              </Box>
            </Flex>
          </Col>
        </Flex>

        <Flex>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Flex className="input-regist" justifyContent="end">
              <Box>
                <p className="font-regist">จังหวัด </p>
              </Box>
              <Box>
                <Select
                  showSearch
                  onChange={provinceChange}
                  style={{ width: "200px" }}
                  placeholder="จังหวัด"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {provinceArray.map((province) => (
                    <Option key={province}>{province}</Option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Flex
              className="input-regist"
              justifyContent="start"
              style={{ marginLeft: "40px" }}
            >
              <Box>
                <Button
                  className="btn-line"
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    padding: "0px 15px 0px 15px",
                  }}
                  disabled
                >
                  <NotificationOutlined />
                  รับแจ้งเตือนผ่าน LINE
                </Button>
              </Box>
            </Flex>
          </Col>
        </Flex>

        {/* ---------------------------Submit-------------------------- */}
        <Col span={24}>
          <Flex className="contentsHome">
            <Button
              htmlType="submit"
              className="ant-btn-primary"
              style={{
                fontSize: "18px",
                borderRadius: "5px",
                padding: "0px 20px 0px 20px",
                cursor: "pointer",
              }}
              onClick={() => handleRegister()}
            >
              ยืนยันการลงทะเบียน
            </Button>
          </Flex>
        </Col>
      </Flex>
    </Row>
  );
}

export default StudentForm;
