# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`VK-container`外层容器。当子元素中包含 `VK-header` 或 `t-footer` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`VK-header`：顶栏容器。

`VK-aside`：侧边栏容器。

`VK-main`：主要区域容器。

`VK-footer`：底栏容器。

> **Tips**
>
> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `VK-container` 的直接子元素必须是> 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `VK-container`

## 常见布局

<demo vue="./example/partOne.vue"></demo>

<demo vue="./example/partTow.vue"></demo>

<demo vue="./example/partThree.vue"></demo>

<demo vue="./example/partFour.vue"></demo>

<demo vue="./example/partFive.vue"></demo>

<demo vue="./example/partSix.vue"></demo>

<demo vue="./example/partSeven.vue"></demo>
