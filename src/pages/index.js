import { Button } from "antd";
import { Box, Flex } from "reflexbox";
import Topbar from "../components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar>
        <div className="container">
          <Flex>
                <Box style={{ padding: "10px 10px 0px 20px", fontSize:"24px", color:"#4B4B4B" }}>
                  <p>งานสัมภาษณ์เข้าศึกษาต่อมหาวิทยาลัยอุบลราชธานี</p>
                </Box>
          </Flex>
          <Flex className="contentsHome">
            <p>Contents</p>
          </Flex>
          <Flex className="contentsHome">
            <Button className="ant-btn-primary" style={{fontSize:"20px", padding:"0px 40px 30px 40px", alignItems:"center", borderRadius:"10px"}}>ลงทะเบียน</Button>
          </Flex>
        </div>
      </Topbar>
    </>
  );
}
