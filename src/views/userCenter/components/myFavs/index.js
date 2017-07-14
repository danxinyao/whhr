import {userCenter as ajax} from 'services'

export default {
	data() {
	  return {
			isShow : 0,
			total:81,
			current:1,
			queryGoodFavoritesList:[],
			queryDecorationEffectFavoritesList: [],
			queryDesignerDrawingFavoritesList: [],
			queryArticleFavoritesList: [],
			num:0,
			/*
			* 请求收藏参数
			*/
			goodData: {
				pageSize: 10,
				page: 1			
			},
			delData: {
				favoritesData: "",
				favoritesType: 0
			}
	   }
   },
	mounted() {
        /*
         * 商品收藏
        */
		this.getQueryGoodFavoritesList()
		
    },   
    methods: {
		show (dan){
			this.isShow = dan
	},
	/*
	 * 分页请求数据
	*/
        changePage(page) {
        	this.page = page;
        	
        	switch(this.goodData.condition.favoritesType){
        		case 4:
        			this.getQueryGoodFavoritesList()
        			break
        		case 1:
        			this.getQueryDecorationEffectFavoritesList()
    				break
    			case 2:
    				this.getQueryDesignerDrawingFavoritesList()
    				break
				case 3:
					this.getQueryArticleFavoritesList()     
					break
        	}
			   	
        },
        /*
         * 商品收藏
        */
        getQueryGoodFavoritesList(dan) {
        	// 查询参数初始化
        	this.goodData.page = 1        	
        	this.util.msg.loading()
        	
        	if(dan === 0){
        		this.isShow = dan
        	}
        	
        	ajax.queryGoodsFavorites(this.goodData).then((ruselt) =>{
        		if(ruselt) {
        			this.queryGoodFavoritesList = ruselt.data
        			this.total = ruselt.totalCount
        		}        		
        		this.util.msg.close()
        	})
        },
        /*
         * 装修效果图收藏
        */        
        getQueryDecorationEffectFavoritesList(dan) {
        	// 查询参数初始化
        	this.goodData.page = 1        	
        	this.util.msg.loading()

        	if(dan){
        		this.isShow = dan
        	}
        	
        	ajax.queryDecorationEffectFavorites(this.goodData).then((ruselt) =>{
        		        		console.log(ruselt.data)         		
        		if(ruselt) {
        			this.queryDecorationEffectFavoritesList = ruselt.data
        			this.total = ruselt.totalCount
        		}
        		this.util.msg.close()
        		console.log(ruselt)
        	})
        },
        /*
         * 设计师图库
        */         
        getQueryDesignerDrawingFavoritesList(dan) {
        	// 查询参数初始化
        	this.goodData.page = 1        	
        	this.util.msg.loading()

        	if(dan){
        		this.isShow = dan
        	}
        	
        	ajax.queryDesignerDrawingFavorites(this.goodData).then((ruselt) =>{
        		        		console.log(ruselt.data)
        		if(ruselt) {
        			this.queryDesignerDrawingFavoritesList = ruselt.data
        			this.total = ruselt.totalCount
        		}        		
        		this.util.msg.close()
        	})
        },
        /*
         * 装修学堂收藏
        */         
        getQueryArticleFavoritesList(dan) {
        	// 查询参数初始化
        	this.goodData.page = 1
        	
        	this.util.msg.loading()
        	
        	if(dan){
        		this.isShow = dan
        	}
        	
        	ajax.queryArticleFavorites(this.goodData).then((ruselt) =>{
        		        		console.log(ruselt.data)
        		if(ruselt) {
        			this.queryArticleFavoritesList = ruselt.data
        			this.total = ruselt.totalCount
        		}         		
        		this.util.msg.close()
        	})
        },
        /*
         * 删除收藏
        */          
        onDelFavoritesList(FavoritesID,index) {
        	this.delData.favoritesData = FavoritesID
        	this.delData.favoritesType = index
        	this.util.msg.loading()       
        	//console.log(this.delData)
        	ajax.delFavorites(this.delData).then((ruselt) =>{
        	    this.util.msg.success('删除成功!')
        	    //console.log(ruselt)
        	    if(index == 1) {
        	    	this.getQueryDecorationEffectFavoritesList()
        	    }
        	    if(index == 2) {
        	    	this.getQueryDesignerDrawingFavoritesList()
        	    }
        	    if(index == 3) {
        	    	this.getQueryArticleFavoritesList() 
        	    }
        	    if(index == 4) {
        	    	this.getQueryGoodFavoritesList()        	    	
        	    }      	    
        	})
        },
    }

}