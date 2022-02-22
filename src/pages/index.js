import { Button, Carousel, Image } from "antd";
import { Box, Flex } from "reflexbox";
import { useRouter } from "next/router";
import Landing from "../components/LayoutsLanding";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Landing>
        <div className="container">
          <Flex>
            <Box
              width={1 / 2}
              style={{
                padding: "10px 10px 0px 20px",
                fontSize: "24px",
                color: "#4B4B4B",
              }}
            >
              <p>งานสัมภาษณ์เข้าศึกษาต่อมหาวิทยาลัยอุบลราชธานี</p>
            </Box>
            <Box width={1 / 2}>
              <Flex justifyContent="end">
                <Button
                  className="btn-login-google"
                  style={{
                    fontSize: "16px",
                    padding: "0px 40px 0px 40px",
                    alignItems: "center",
                  }}
                  onClick={() => router.replace("/dashboard")}
                >
                   Dashboard
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Flex className="contentsHome">
            <Carousel autoplay>
              <img src="/assets/adds/admiss-01.jpg" />
            </Carousel>
          </Flex>
          <Flex
            className="contentsHome"
            style={{ marginTop: 50}}
          >
            <Button
              className="ant-btn-primary"
              style={{
                fontSize: "24px",
                padding: "0px 40px 40px 40px",
                marginBottom: 80,
                alignItems: "center",
                borderRadius: "10px",
              }}
              onClick={() => router.replace("/registers")}
            >
              ลงทะเบียน
            </Button>
          </Flex>
        </div>
      </Landing>
    </>
  );
}
