import { Checkbox, Divider, Button } from 'antd'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import Layouts from '../../../components/Layouts'

function Users() {
  return (
    <Layouts>
      <Flex flexDirection="column">
        <Flex>
        <Box width={1/6}>
          <Checkbox />
        </Box>
        <Box width={1/6}>Date Join</Box>
        <Box width={1/6}>Full Name</Box>
        <Box width={1/6}>Email</Box>
        <Box width={1/6}>Role</Box>
        <Box width={1/6}>Edit</Box>
        </Flex>
        <Divider />
        <Flex>
        <Box width={1/6}>
          <Checkbox />
        </Box>
        <Box width={1/6}>22/02/2022</Box>
        <Box width={1/6}>กิตติภณ ปาคำทอง</Box>
        <Box width={1/6}>kittiphon.pa.61@ubu.ac.th</Box>
        <Box width={1/6}>Admin</Box>
        <Box width={1/6}><Button size='small' style={{color:"#FFF",backgroundColor:"#FF3D00", borderRadius:"5px", borderColor:"#FF3D00"}}>แก้ไข</Button></Box>
        </Flex>
      </Flex>
    </Layouts>
  )
}

export default Users