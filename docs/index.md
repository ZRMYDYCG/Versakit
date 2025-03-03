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

<VPTeamPage>
  <VPTeamPageTitle class="member-title">
    <template #title>贡献者</template>
		<template #lead>
      感谢每一位贡献者的支持与贡献！
			你们的每一次提交，都是推动 Versakit UI 进步的动力 💖
    </template>
  </VPTeamPageTitle>
	<VPTeamMembers class="member-content" size="small" :members="contributors" />
	<!-- <table>
		<tbody>
			<tr><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/lenran659" title="lenran659"><img src="https://avatars.githubusercontent.com/u/74483049?v=4" width="100px;" alt="lenran659" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/Dream-2022" title="Dream-2022"><img src="https://avatars.githubusercontent.com/u/131731035?v=4" width="100px;" alt="Dream-2022" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/ZHuuO" title="ZHuuO"><img src="https://avatars.githubusercontent.com/u/128499037?v=4" width="100px;" alt="ZHuuO" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/Simonmie" title="Simonmie">
			</tr>
		</tbody>
	</table> -->

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
  },{
    avatar: 'https://avatars.githubusercontent.com/u/86543671?v=4',
    name: 'abining',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/abining' },
    ]
  },
]
const contributors = [
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
    avatar: 'https://avatars.githubusercontent.com/u/128499037?v=4',
    name: 'ZHuuO',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ZHuuO' },
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
		avatar: 'https://avatars.githubusercontent.com/u/58333667?v=4',
		name: 'yuguaa',
		title: 'Contributor',
		links: [
      { icon: 'github', link: 'https://github.com/yuguaa' },
    ]
	},
]
</script>

<style>
.member-title, .member-content{
  user-select: none;
}

</style>
