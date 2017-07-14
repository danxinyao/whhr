const List = resolve => require(['views/designer/list/index.vue'], resolve)
const Detail = resolve => require(['views/designer/detail/index.vue'], resolve)

export default [
    {
        path: '/designer',
        name: 'designer',
        component: List,
        meta: {
            title: '设计师',
        }
    },
    {
		path: '/designerDetail',
        name: 'designerDetail',
        component: Detail,
        meta: {
            title: '设计师图库',
        }    	
    }
]