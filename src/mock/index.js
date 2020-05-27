import Mock from 'mockjs'
import { getMockDataList } from './mock'
// Mock.mock( rurl?, rtype?, template|function( options ) )\
// rurl 请求地址(可选) rtype 请求类型(可选) Post Get Delete Put 等
// template 表示数据模板 可以是对象 或字符串(可选)
// function( options ) 表示生成相应函数 options 指定本次ajax 选项集 url type body 三个属性 

Mock.mock('/getData','post',getMockDataList)
