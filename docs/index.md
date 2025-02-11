<MainPage />

<VPTeamPage>
  <VPTeamPageTitle class="member-title">
    <template #title>团队成员</template>
    <template #lead>
      我们是一群热爱开源的人。
    </template>
  </VPTeamPageTitle>

<VPTeamMembers class="member-content" size="small" :members="members" />

</VPTeamPage>

<script setup>
import MainPage from '/.vitepress/components/mainPage.vue'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/74483049?s=400&u=102dfac48d0067d9d7a5576134e409590bbfaafe&v=4',
    name: 'Jannik',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/lenran659' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/131731035?v=4',
    name: 'Pei',
    title: 'UI Designer | Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Dream-2022' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/122306263?v=4',
    name: 'JustHappy',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Simonmie' },
    ]
  },
	{
    avatar: 'https://avatars.githubusercontent.com/u/128499037?v=4',
    name: 'ZHuuO',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ZHuuO' },
    ]
  },
		  {
    avatar: 'https://avatars.githubusercontent.com/u/184910937?v=4',
    name: 'StriveToLearnCode',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/StriveToLearnCode' },
    ]
  },
	 {
    avatar: 'https://avatars.githubusercontent.com/u/180088207?v=4',
    name: 'Fofow',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Natorx' },
    ]
  },
]
</script>
<style>
.member-title, .member-content{
  user-select: none;
}
</style>