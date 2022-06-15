import {
  Checkbox,
  Divider,
  Button,
  Table,
  Space,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import React, { useState } from "react";
import { Box, Flex } from "reflexbox";
import styled from "@emotion/styled";
import Layouts from "../../../components/Layouts";

import useSWR from "swr";
import { update_role, delete_user } from "../../api";

const { Option } = Select;

const StyledModal = styled(Modal)`
  position: fixed;
  width: 600px;
  top: 300px;
  left: calc(50% - 250px);
  bottom: 40px;
  z-index: 100;
  .ant-modal-wrap {
    overflow: hidden !important;
  }
  .ant-modal-content {
    border-radius: 5px;
  }
`;

function Users() {
  const url = "http://localhost:8000/api/v1/getAllUser";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const [records, setRecords] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newRole, setNewRole] = useState(records?.role);

  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const columns = [
    {
      title: "User Name",
      key: "username",
      dataIndex: "username",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Full Name",
      key: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Action",
      key: "actoion",
      render: (_, record) => {
        setRecords(record);
        setNewRole(record.role);
        return records ? (
          <Space size="middle">
            <a onClick={() => setIsModalVisible(true)}>Edit</a>
            <a onClick={() => onDelete()}>Delete</a>
          </Space>
        ) : (
          <></>
        );
      },
    },
  ];

  const onChange = (value) => {
    console.log(`selected ${value}`);
    setNewRole(value);
  };

  const onSubmit = async () => {
    const payLoad = {
      id: records.id,
      role: newRole,
    };
    console.log(payLoad);
    try {
      await update_role(payLoad).then((respones) => {
        if (respones.status == 200) {
          console.log("respone ===>", respones);
          window.location.reload();
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const onDelete = async () => {
    const payLoad = {
      id: records.id,
      role: records.role,
    };
    console.log(payLoad);
    try {
      await delete_user(payLoad).then((respones) => {
        if (respones.status == 200) {
          console.log("respone ===>", respones);
          window.location.reload();
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const data_all = [];
  if (data) {
    for (let i = 0; i < data?.detail.length; i++) {
      data_all.push(data?.detail[i]);
    }
  }

  return (
    <Layouts>
      <Table columns={columns} dataSource={data_all}></Table>
      <StyledModal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <Flex className="contentsHome">
          <p style={{ fontSize: "18px" }}>แก้ไขข้อมูลผู้ใช้</p>
        </Flex>
        <Flex className="contentsHome">
          <Box width={1 / 2}>
            <p style={{ fontSize: "16px" }}>{records?.email}</p>
          </Box>
          <Box>
            <p style={{ fontSize: "16px" }}>{records?.username}</p>
          </Box>
        </Flex>
        <Flex className="contentsHome">
          <p style={{ fontSize: "16px" }}>แก้ไข role</p>
        </Flex>
        <Flex className="contentsHome">
          <Select
            showSearch
            placeholder="Select a role"
            optionFilterProp="children"
            onChange={onChange}
          >
            <Option value="student">student</Option>
            <Option value="teacher">teacher</Option>
            <Option value="admin">admin</Option>
          </Select>
        </Flex>
        <Flex className="contentsHome">
          <Button
            htmlType="submit"
            className="ant-btn-primary"
            style={{
              marginTop: "20px",
            }}
            onClick={() => onSubmit()}
          >
            บันทึก
          </Button>
        </Flex>
      </StyledModal>
    </Layouts>
  );
}

export default Users;
