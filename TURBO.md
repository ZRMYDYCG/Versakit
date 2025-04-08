# Versakit Turborepo 使用指南

## 简介

Versakit项目现在使用Turborepo作为构建系统，它具有以下优点：

- **智能缓存**：自动缓存构建结果，大幅提高构建速度
- **并行执行**：自动并行执行不相互依赖的任务
- **增量构建**：仅重新构建变更的文件
- **任务编排**：通过依赖关系自动确保正确的构建顺序

## 基本命令

### 构建

```bash
pnpm build
```

构建所有包，会智能地利用缓存，只构建修改过的包。

### 开发

```bash
pnpm dev
```

启动开发服务器。

### 清理

```bash
pnpm clean
```

清理所有包的构建产物和Turborepo缓存。

### 检查代码

```bash
pnpm lint
```

运行全部包的lint检查。

```bash
pnpm lint:fix
```

运行全部包的lint修复。

### 测试

```bash
pnpm test
```

运行所有包的测试。

## 高级用法

### 只构建特定包

```bash
npx turbo build --filter=@versakit/ui
```

只构建UI包和它的依赖。

### 强制清除缓存

```bash
npx turbo build --force
```

忽略缓存，强制重新构建所有内容。

### 查看任务关系图

```bash
npx turbo build --graph
```

生成构建任务的依赖关系图。

### 查看构建计划

```bash
npx turbo build --dry-run=text
```

显示构建计划，但不实际执行构建。

## Turborepo配置

Turborepo的配置位于项目根目录的`turbo.json`文件中。核心配置包括：

- **tasks**: 定义可执行的任务和它们的配置
- **dependsOn**: 指定任务的依赖关系
- **outputs**: 定义任务的输出路径（用于缓存）

## 常见问题

### 缓存不生效?

- 确保任务的`outputs`正确配置
- 使用`npx turbo clean`清理缓存
- 检查是否修改了全局依赖（例如tsconfig.json）

### 构建顺序错误?

检查`dependsOn`配置，确保正确指定了包之间的依赖关系。
```

</rewritten_file>