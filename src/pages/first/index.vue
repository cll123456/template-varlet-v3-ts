<route>
{
  meta: {
    keepAlive:true,
    title: 'first',
    transitionName: 'fade'
  }
}
</route>
<script lang="ts" setup>
const router = useRouter()
const goToDetail = () => {
  router.push('/first/detail')
}
</script>
<template>
  <Header title="first1" />
  <div class="exclude-h-n-s">
    <var-card
      class="m-b-2"
      title="风景"
      subtitle="公园里的风景"
      description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    >
      <template #extra>
        <div class="w-full text-right" @click="goToDetail">
          <var-button type="warning">查看详情</var-button>
        </div>
      </template>
    </var-card>
    <var-card
      title="风景"
      subtitle="公园里的风景"
      description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
  </div>
  <Navbar></Navbar>
</template>

<style lang="scss" scoped></style>
