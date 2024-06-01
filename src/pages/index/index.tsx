import { FunctionComponent, useState } from 'react'
import { VirtualWaterfall } from "@tarojs/components-advanced"
import { View, Image, Text } from "@tarojs/components";
import house1Png from './house1.png'
import house2Png from './house.png'
import './index.scss'


function Item({ id, index, data }) {
  const item = data[index]
  return (
    <View id={id} >
      <View className="item">
        <View className="left">
          <Image
            className="left-img"
            mode="widthFix"
            src={
              index % 3
                ? house1Png
                : house2Png
            }
          ></Image>
        </View>
        <View className="right">
          <View className="title ellipsis">{item.title}</View>
          <View className="properties">
            <Text>500㎡</Text>
            <Text>&nbsp;|&nbsp;</Text>
            <Text>北</Text>
          </View>
        </View>
      </View>
      <View style={{ height: "12px", width: "100%" }}> </View>
    </View>
  )
}

function Index() {
  const [list] = useState(() => {
    return new Array(50).fill({
      title: "测试很长的标题",
    })
  })
  return (
    <View className="nutui-react-demo">
      <VirtualWaterfall
        width="100%"
        height="90vh"
        item={Item as FunctionComponent}
        itemData={list}
        itemCount={list.length}
        itemSize={300}
        unlimitedSize
      // enhanced
      />
    </View>
  )
}

export default Index
