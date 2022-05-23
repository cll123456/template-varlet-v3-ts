import { ListProps } from '@varlet/ui'

export interface IVirtualObject {
  /**
   * id
   */
  id: string
  /**
   * 其他属性
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface IVirtualList extends ListProps {
  /**
   * 是否开启虚拟dom加载
   */
  useVirtual?: boolean
  /**
   * 传入的数据
   */
  dataList: Array<IVirtualObject>
  /**
   * key
   */
  dataKey?: string | 'id'
}

export interface IListAll extends IVirtualList {
  /**
   * 当前行的id
   */
  curRowId: number | string
  /**
   * 是否渲染过
   */
  hasRenderDom: boolean
  /**
   * 当前行key
   */
  curRowKey: number | string
  /**
   * 当前行距离顶部的距离
   */
  curRowMarginTop: number
  /**
   * 当前行的高度
   */
  curRowHeight: number
}
