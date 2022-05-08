import { Button, Card, Col, Row } from "antd";
import { React, useState } from "react";
import { Flex, Box } from "reflexbox";
import { CopyOutlined, EllipsisOutlined } from "@ant-design/icons";

import useSWR from "swr";
import Link from "next/link";

function EventCard() {

  const url = "http://localhost:8000/api/v1/eventInterview";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const eventArray = [];
  if (data) {
    for (let i = 0; i < data?.detail.length; i++) {
      //   console.log(data?.detail)
      eventArray.push(data?.detail[i]);
    }
  }
  console.log(data);

  


  return (
    <>
      {eventArray[0] ? (
        <div className="site-card-border-less-wrapper">
          <Row justify="space-between">
            {eventArray.map((eventdata) => (
              <Col 
                xs={{ span: 24 }}
                ms={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
              >
                <Card
                  key={eventdata}
                  bodyStyle={{ width: 300, height: 200 }}
                  style={{ marginTop: 20, margin:5 }}
                  bordered={true}
                  title={eventdata.title}
                  actions={[
                    <CopyOutlined key="setting" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <p>{eventdata.faculty}</p>
                  <p>{eventdata.major}</p>
                  <Link href='/event/[id]' as={'/event/'+ eventdata.requrl}>
                  <a>{eventdata.requrl}</a>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default EventCard;
