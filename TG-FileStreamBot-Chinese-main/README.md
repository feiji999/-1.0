# TG-FileStreamBot 中文版

Telegram 文件流媒体机器人 - 中文版本

## 项目说明
这是一个基于 Telegram 的文件流媒体机器人，支持文件的上传、下载和流式传输。

## 功能特性
- 支持文件流传输
- 并行传输优化
- 文件属性识别
- 异步处理

## 依赖项
- telethon - Telegram 客户端库
- cryptg - 加密库
- aiohttp - 异步 HTTP 客户端
- python-dotenv - 环境变量管理

## 快速开始

### 1. 安装依赖
```bash
pip install -r requirements.txt
```

### 2. 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，填入您的 Telegram 凭证
```

### 3. 运行项目
```bash
python -m WebStreamer
```

## 文件结构
```
cn/
├── WebStreamer/           # 主程序包
│   ├── __init__.py       # 包初始化
│   ├── __main__.py       # 主入口
│   ├── vars.py           # 全局变量
│   ├── plugins/          # 插件模块
│   │   ├── start.py      # 启动命��
│   │   └── stream.py     # 流传输功能
│   └── utils/            # 工具模块
│       ├── file_properties.py   # 文件属性处理
│       ├── paralleltransfer.py  # 并行传输
│       └── util.py              # 其他工具
├── docs/                 # 文档
│   └── INSTALL.md        # 安装指南
├── requirements.txt      # 依赖列表
├── Dockerfile           # Docker 配置
├── Procfile            # 进程配置
├── .env.example        # 环境变量示例
└── render.yaml         # Render 部署配置
```

## 部署

### Docker 部署
```bash
docker build -t tg-filestreamer .
docker run -e BOT_TOKEN=your_token tg-filestreamer
```

### Render 部署

使用 `render.yaml` 配置文件进行部署。

## 许可证
MIT
