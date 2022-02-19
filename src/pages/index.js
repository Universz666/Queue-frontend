import { Button, Carousel, Image } from "antd";
import { Box, Flex } from "reflexbox";
import { useRouter } from "next/router";
import Topbar from "../components/Topbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Topbar>
        <div className="container">
          <Flex>
            <Box
              style={{
                padding: "10px 10px 0px 20px",
                fontSize: "24px",
                color: "#4B4B4B",
              }}
            >
              <p>งานสัมภาษณ์เข้าศึกษาต่อมหาวิทยาลัยอุบลราชธานี</p>
            </Box>
          </Flex>
          <Flex className="contentsHome">
            <Carousel autoplay>
              <img src="/assets/adds/admiss-01.jpg" />
            </Carousel>
          </Flex>
          <Flex
            className="contentsHome"
            style={{ marginTop: 50, cursor: "pointer" }}
            onClick={() => router.replace("/registers")}
          >
            <Button
              className="ant-btn-primary"
              style={{
                fontSize: "20px",
                padding: "0px 40px 0px 40px",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              ลงทะเบียน
            </Button>
          </Flex>
        </div>
      </Topbar>
    </>
  );
}
