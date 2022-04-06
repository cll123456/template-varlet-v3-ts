import { PropType } from 'vue'
import { IVirtualObject } from './type'

export default {
  /**
   * 无限滚动的loading 默认false
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否立即运行 默认true
   */
  immediateCheck: {
    type: Boolean,
    default: true,
  },
  /**
   * 无限循环是否完成 默认false
   */
  finished: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否运行出错 默认false
   */
  error: {
    type: Boolean,
    default: false,
  },
  /**
   * 触底的高度 默认0
   */
  offset: {
    type: [String, Number],
    default: 0,
  },
  loadingText: {
    type: String,
  },
  /**
   * 完成时候的文字
   */
  finishedText: {
    type: String,
  },
  /**
   * 错误的文字
   */
  errorText: {
    type: String,
  },
  /**
   * load方法
   */
  onLoad: {
    type: Function as PropType<() => void>,
  },
  /**
   * 更改loading的方法
   */
  'onUpdate:loading': {
    type: Function as PropType<(loading: boolean) => void>,
  },
  /**
   * 更改错误的方法
   */
  'onUpdate:error': {
    type: Function as PropType<(error: boolean) => void>,
  },
  /**
   * 是否使用虚拟dom 默认false,当总的数量达到100条的时候默认开始
   */
  useVirtual: {
    type: Boolean,
    required: true,
    default: false,
  },
  /**
   * 更改虚拟dom的方法
   */
  'onUpdate:useVirtual': {
    type: Function as PropType<(useVirtual: boolean) => void>,
  },
  /**
   * 传入的数据
   */
  dataList: {
    type: Array as PropType<IVirtualObject[]>,
    default: () => [],
  },
  /**
   * 每一个子项的高度，方便用于一开始计算，默认是50，会自动计算
   */
  itemDefaultHeight: {
    type: Number,
    default: 50,
  },
  /**
   * 虚拟dom的情况显示多少条数据，默认是20
   */
  showCounts: {
    type: Number,
    default: 20,
  },
}
