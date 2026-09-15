# 安装指南

## 前置要求
- Python 3.7+
- pip
- Telegram Bot Token
- Telegram API ID 和 API Hash

## 安装步骤

### 1. 克隆仓库
```bash
git clone https://github.com/feiji999/TG-FileStreamBot-Chinese.git
cd TG-FileStreamBot-Chinese
```

### 2. 创建虚拟环境（推荐）
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或
venv\Scripts\activate  # Windows
```

### 3. 安装依赖
```bash
pip install -r requirements.txt
```

### 4. 配置环境变量
```bash
cp .env.example .env
```

编辑 `.env` 文件，添加您的 Telegram 凭证：
```
BOT_TOKEN=你的_bot_token
API_ID=你的_api_id
API_HASH=你的_api_hash
```

### 5. 运行项目
```bash
python -m WebStreamer
```

## 获取 Telegram 凭证

1. **Bot Token**: 在 BotFather (@BotFather) 创建机器人
2. **API ID 和 API Hash**: 访问 https://my.telegram.org 获取

## 故障排除

如遇到问题，请检查：
- Python 版本是否 >= 3.7
- 所有依赖是否正确安装
- 环境变量是否正确配置
