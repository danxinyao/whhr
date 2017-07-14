<template>
    <div class="region clearfix">
        <div class="form-item-select state" :style="styles">
            <select v-model="stateRegionID">
                <option value="">省</option>
                <option v-for="state in stateList" :value="state.regionID">{{ state.name }}</option>
            </select>
        </div>
        <div class="form-item-select city" :style="styles">
            <select v-model="cityRegionID">
                <option value="">市</option>
                <option v-for="city in cityList" :value="city.regionID">{{ city.name }}</option>
            </select>
        </div>
        <div class="form-item-select district" :style="styles">
            <select v-model="districtRegionID">
                <option value="">区</option>
                <option v-for="district in districtList" :value="district.regionID">{{ district.name }}</option>
            </select>
        </div>   
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .region {
        .form-item-select {
            width: 32%;
        }
        .state, .city, .district {
            display: inline-block;
        }
        .state {
            float: left;
        }
        .district {
            float: right;
        }
    }
</style>  
<script type="text/babel">
    import region from './region'
    export default {
        ...region
    }
</script>