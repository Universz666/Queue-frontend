import { Button, Divider } from 'antd'
import React from 'react'
import { Flex, Box } from 'reflexbox'
import Layouts from '../../../components/Layouts'

function Admin() {
  return (
    <Layouts>
      <Flex flexDirection="column">
        <Flex style={{padding:5}}>
          <Box width={1/8}>ลำดับคิว</Box>
          <Box width={1/8}>ชื่อ-นามสกุล</Box>
          <Box width={1/8}>โรงเรียน</Box>
          <Box width={1/8}>จังหวัด</Box>
          <Box width={1/8}>สัมภาษณ์โดย</Box>
          <Box width={1/8}>ผลการสัมภาษณ์</Box>
          <Box width={1/8}>หมายเหตุ</Box>
          <Box width={1/8}>แก้ไข</Box>
        </Flex>
        <Divider></Divider>
        <Flex style={{padding:5}}>
          <Box width={1/8}>1</Box>
          <Box width={1/8}>กิตติภณ ปาคำทอง</Box>
          <Box width={1/8}>โรงเรียนมออุบล</Box>
          <Box width={1/8}>อุบลราชธานี</Box>
          <Box width={1/8}>ดร.ไพชยนต์ คงไชย</Box>
          <Box width={1/8}>ผ่าน</Box>
          <Box width={1/8}>คุยสนุก</Box>
          <Box width={1/8}><Button size='small' style={{color:"#FFF",backgroundColor:"#FF3D00", borderRadius:"5px", borderColor:"#FF3D00"}}>แก้ไข</Button></Box>
        </Flex>
      </Flex>
    </Layouts>
  )
}

export default Admin