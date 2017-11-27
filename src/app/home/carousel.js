import React from 'react'
import { Carousel } from 'antd-mobile'
import Style from './css/car.less'

const tempData = [
  {
    imgs: 'AiyWuByWklrrUDlFignR',
    url: 'https://zos.alipayobjects.com/rmsportal/',
    linkUrl: 'https://www.baidu.com'
  },
  {
    imgs: 'AiyWuByWklrrUDlFignR',
    url: 'https://zos.alipayobjects.com/rmsportal/',
    linkUrl: 'https://www.baidu.com'
  },
  {
    imgs: 'AiyWuByWklrrUDlFignR',
    url: 'https://zos.alipayobjects.com/rmsportal/',
    linkUrl: 'https://www.baidu.com'
  }
]

class Car extends React.Component {
  state = {
    initialHeight: 176
  }

  render () {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {}
    return (
      <div className={Style.myCarousel}>
        <Carousel
          className
          autoplay
          infinite
          selectedIndex={1}
          swipeSpeed={35}
        >
          {tempData.map(ii => (
            <a href={ii.linkUrl} key={ii} style={hProp} className={Style.myCarouselLink}>
              <img
                className={Style.myCarouselImg}
                src={`${ii.url}${ii.imgs}.png`}
                alt=""
                onLoad={() => {
                  this.setState({
                    initialHeight: null
                  })
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

const CarouselCompoent = () => {
  return (
    // 根据父级传入的字段来循环出来
    <div>
      <Car />
    </div>
  )
}


export default CarouselCompoent
