import {userCenter as ajax} from 'services'
import { upload } from 'services'
import HrUsernav from '../components/usernav/index.vue'
export default {
	components: {
		HrUsernav,
	},
	data() {
		return {
			orderId: '',
			itemId: '',
			orderInfo: {},
			stepActive: -1,
			refundType: 1,
			refundQuery: {
				id: '', // 退货单id
				orderId: '', // 订单id
				itemId: '' // 订单明细id
			},
			refundForm: {
				id: '', // 订单id
				itemId: '', // 商品明细id
				refundOrderId: '', // 退货单id
				refundType: 1,
				refundCause: 0,
				refundAmount: '',
				refundReason: '',
				imgUrls: []
			},
			refundInfo: {}, // 退款单详情
			refundFlag: -1, // 退款单状态
			refundMaxAmount: 0, // 最大可退款数
			refundCause: [], // 退货退款原因
			refundDeliveryForm: {
				id: '', // 退款单id
				companyCode: '', // 快递编码
				companyName: '', // 快递公司名
				deliveryNo: '' // 快递单号
			},
			deliveryCompanyInfo: [],//快递公司名字
		}
	},
	mounted() {
		this.orderId = this.$route.query.id
		this.itemId = this.$route.query.itemId || ''
		this.refundType = this.$route.query.refundType
		this.refundQuery.itemId = this.itemId
		this.refundQuery.orderId = this.orderId
		this.refundForm.id = this.orderId
		this.refundForm.itemId = this.itemId
		this.refundForm.refundType = this.refundType
		this.getRefundOrderDetail()
		this.getOrderDetail()
		this.getMaxRefundAmount()
		this.getRefundCause()
		this.getCompanyInfo()
	},
	watch: {
		'refundForm.refundAmount'() {
			let oldAmount = this.refundForm.refundAmount
			this.refundForm.refundAmount = oldAmount.toString().replace(/[^\d.]/g,'')
		}
	},
	methods: {
		// 获取订单详情
		getOrderDetail() {
			ajax.queryOrderDetail(this.orderId).then((result) => {
				this.orderInfo = result
				this.orderInfo.orderFlagTimeline.forEach((item, index) => {
					if (item.hasValue) {
						this.stepActive = index
					}
				})
			})
		},
		// 获取退货单详情
		getRefundOrderDetail() {
			ajax.getRefundOrderDetail(this.refundQuery).then((result) => {
				this.refundInfo = result
				//this.refundQuery.id = this.refundInfo.id || ''
				this.refundForm.refundOrderId = this.refundInfo.id || ''
				this.refundDeliveryForm.id = this.refundInfo.id || ''
				this.refundForm.refundType = this.refundInfo.refundType
				this.refundForm.refundCause = this.refundInfo.refundCause
				this.refundForm.refundAmount = this.refundInfo.refundAmount
				this.refundForm.refundReason = this.refundInfo.refundReason
				this.refundForm.imgUrls = this.refundInfo.imgUrls

				if (this.refundInfo.flag) {
					this.refundFlag = this.refundInfo.flag
				}
				if (this.refundInfo.refundType) {
					this.refundType = this.refundInfo.refundType
				}
			}).catch((error) => {
				this.refundForm.refundOrderId = ''
				this.refundFlag = 0
			})
		},
		// 获取最大退款金额
		getMaxRefundAmount() {
			ajax.getMaxRefundAmount({
				orderId: this.orderId,
				itemId: this.itemId
			}).then((result) => {
				this.refundMaxAmount = result
				this.refundForm.refundAmount = this.refundMaxAmount
			})
		},
		// 获取退货、退款原因
		getRefundCause() {
			let ajaxmethod = this.refundType == 1 ? ajax.getRefundCause : ajax.getRefundGoodsCause
			ajaxmethod().then((result) => {
				this.refundCause = result
			})
		},
		// 编辑退款金额
		refundAmountFocus() {
			if (this.refundForm.refundAmount == this.refundMaxAmount) {
				this.refundForm.refundAmount = ''
			}
		},
		// 编辑退款金额
		refundAmountBlur() {
			if (this.refundForm.refundAmount == '') {
				this.refundForm.refundAmount = this.refundMaxAmount
			}
		},
		// 上传图片点击
		handleClick() {
			this.$refs.input.click()
		},
		handleChange(e) {
			const files = e.target.files
			if (!files)
				return
			this.uploadFiles(files)
			this.$refs.input.value = null
		},
		uploadFiles(files) {
			let postFiles = Array.prototype.slice.call(files)
			if (postFiles.length === 0)
				return
			this.upload(postFiles[0])
		},
		upload(file) {
			upload.uploadFile(file).then((result) => {
                this.refundForm.imgUrls.push(result.filePath)
            })
		},
		// 删除上传的图片
		delUploadImg(file) {
			const fileList = this.refundForm.imgUrls
			fileList.splice(fileList.indexOf(file), 1)
			this.refundForm.imgUrls = fileList
		},
		// 修改申请
		updateRefund() {
			this.refundFlag = 0
		},
		// 保存退货单
		saveRefundOrder() {
			if (this.refundForm.refundAmount > this.refundMaxAmount) {
				this.util.msg.error('超过最大可退款数')
				return
			}
			this.util.msg.loading()
			ajax.saveRefundOrder(this.refundForm).then((result) => {
				this.util.msg.success('提交成功')
				this.getRefundOrderDetail()
			}).catch((error) => {
				this.util.msg.error(error)
			})
		},
		// 取消退款
		cancelRefund() {
			this.util.msg.loading()
			ajax.cancelRefund({
				id: this.refundInfo.id
			}).then((result) => {
				this.util.msg.success('撤销申请成功')
				this.getRefundOrderDetail()
			}).catch((error) => {
				this.util.msg.error(error)
			})
		},
		//获取快递公司名称
		getCompanyInfo() {
			ajax.getDeliveryCompanyInfo().then((result) => {
				this.deliveryCompanyInfo = result
				//console.log(result)
				//console.log('dan')			
			})
		},
		// 填写退款快递信息
		saveDeliveryInfo() {
			if (this.refundDeliveryForm.companyCode) {
				this.deliveryCompanyInfo.forEach((item) => {
					if (item.value == this.refundDeliveryForm.companyCode) {
						this.refundDeliveryForm.companyName = item.text
					}
				})
			}
			this.util.msg.loading()
			ajax.saveDeliveryInfo(this.refundDeliveryForm).then((result) => {
				this.util.msg.success('提交成功')
				this.getRefundOrderDetail()
			}).catch((error) => {
				this.util.msg.error(error)
			})
		}
	}
}
