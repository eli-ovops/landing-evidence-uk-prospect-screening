# SealProof 本地预览包

包含当前 9.0 分视觉验收版本的五页网站：Home、Services、Testimonials、About、Contact，以及原样图片、字体、Facebook 外链、表单前端和 Python 表单处理程序。

## 启动

需要 Python 3，无需安装第三方依赖。在解压目录运行 `python3 start-preview.py`，然后访问 http://127.0.0.1:8771/ 。macOS 也可运行“启动预览.command”。端口被占用时使用 `python3 start-preview.py --port 8772`。按 Ctrl+C 停止。

请通过上述本地服务器访问，直接双击 HTML 无法正确预览完整路径与表单接口。

## 当前状态

本包是 LOCAL_PREVIEW_PACKAGE，页面与已验收版本逐文件一致。正式收件服务尚未配置、真实邮件送达尚未验证；启动器关闭邮件发送，表单不会伪报成功。正式启用需要配置并验证业务收件通道。

客户图片与 Logo 保留当前展示原样；来源见 ASSET_SOURCES.json。图片用于本地独立概念预览，正式公开使用及向客户转让的素材权利尚未确认。本包未部署，不是 Cloudflare 上传包或已获素材转让许可的正式交付包。

MANIFEST.json 记录包内文件 SHA-256，字体许可随 assets/fonts/OFL.txt 保留。
