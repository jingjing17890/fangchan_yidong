import HttpBase from './http.base'

let _http = 'http://api.map.baidu.com/'
var p = {
  geotable_id: 106599,
  ak: 'K7b3ArpyD9gHq50ej7wSNWZZ',
  xhr: null
}
// let xhr = null

export default class MapService extends HttpBase {
  constructor() {
    super('http')
  }

  /**
   * 坐标转换api
   * @param {any} params.coords [是] 坐标源 格式：经度,纬度;经度,纬度… 限制：最多支持100个
   * @param {any} params.ak [是] 开发者密钥
   * @param {any} params.from源坐标类型 [否] 1：GPS设备获取的角度坐标，wgs84坐标;
   * @param {any} params.to目的坐标类型 [否] 5：bd09ll(百度经纬度坐标),
   * @returns Promise status === 0 正常
   * result {x, y}
   * @memberOf MapService
   */
  getLocation(params = {}) {
    params.from = 1
    params.to = 5
    params.ak = p.ak
    return this.getJson(_http + 'geoconv/v1/', params, false)
  }

  /**
   * 根根据经纬度坐标获取地址  （默认显示周边1000米内的poi）
   * @param {any} params.location [是] 坐标源 格式：38.76623,116.43213 lat<纬度>,lng<经度>
   * @param {any} params.address [是] 根据指定地址进行坐标的反定向解析，最多支持100个字节输入。
   * @param {any} params.city [否] “北京市”
   * @param {any} params.pois [否] 是否显示指定位置周边的poi，0为不显示，1为显示。当值为1时，默认显示周边1000米内的poi。
   * @param {any} params.ak [是] 开发者密钥
   * @param {any} params.callback [否]
   * @returns Promise status === 0 正常
   * @memberOf MapService
   */

  getLocationName (params = {}) {
    params.ak = p.ak
    params.output = 'json'
    return this.getJson(_http + 'geocoder/v2/', params, false)
  }
  /**
   * 根据输入地名 获取地址列表 模糊检索pois
   * @param {any} params.query [是] 输入建议关键字（支持拼音）
   * @param {any} params.region [是] 格式：全国、北京市、131、江苏省等 注：支持全国、省、城市及对应百度编码（citycode）
   * @param {any} params.ak [是] 开发者密钥
   * @param {any} params.city_limit [否] [默认 false] "false"or"true" 取值为"true"，仅返回region中指定城市检索结果
   * @param {any} params.output [否] [默认 xml] "xml"or"json" 返回数据格式，可选json、xml两种
   * @returns Promise status === 0 正常
   * @memberOf MapService
   */
  getAddress(params = {}) {
    params.ak = p.ak
    params.output = 'json'
    params.city_limit = false
    return this.getJson(_http + 'place/v2/suggestion', params, false)
  }
  /**
   * 地名检索 pois
   * @param {any} params.query [是] 中关村、ATM、百度大厦
   * @param {any} params.scope [是] 1、2 检索结果详细程度。取值为1 或空，则返回基本信息；取值为2，返回检索POI详细信息
   * @param {any} params.location [是] 38.76623,116.43213
   * @param {any} params.ak [是] 开发者密钥
   * @param {any} params.page_size [否] [默认 10] 最大20
   * @param {any} params.city_limit [否] [默认 false] "false"or"true" 取值为"true"，仅返回region中指定城市检索结果
   * @param {any} params.region [是] 格式：北京、131、全国、等 注：检索区域（市级以上行政区域），如果取值为“全国”或某省份，则返回指定区域的POI及数量。
   * @param {any} params.output [否] [默认 xml] "xml"or"json" 返回数据格式，可选json、xml两种
   * @returns Promise status === 0 正常
   * @memberOf MapService
   */
  placeSearch (params = {}) {
    params.ak = p.ak
    if (!params.location) {
      params.scope = 2
      params.city_limit = true
    }
    params.output = 'json'
    return this.getJson(_http + 'place/v2/search', params, false)
  }
  // c端没有调用
  getStore(params = {}) {
    params.geotable_id = p.geotable_id
    return this.get(_http + 'geosearch/v3/nearby', params, false)
  }
}
