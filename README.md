# direct-message
[功能]
1. 注册/登录
2. 联系人
3. 消息

[设计思路]
1. 注册/登录
a) 存储 id(email) 和 password，注意避免密码明文传递和存储
b) 服务端 session 管理

2. 联系人
a) 存储联系人、建立关系的时间、未读消息数量
b) 查看、添加、删除功能

3. 消息
a) 存储消息发送者、消息接收者、消息内容、消息发送时间
b) 消息查询功能（可批量查询）
c) 消息发送、删除功能

[使用第三方工具/库]
1. Django
2. MySQL
3. Vue

[部署方法]
1. 初始化数据库
python manage.py makemigrations
python manage.py migrate

2. 启动服务
python manage.py runserver 0.0.0.0:8000
根据需要修改 port
