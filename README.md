## 最佳实践文章参考

@see[https://blog.csdn.net/qq_45890533/article/details/133222017]

## 选型

数据库ORM框架选型： praisma @see[https://prisma.nodejs.cn/]
DTO校验: 管道 + class-validator @see[https://zhuanlan.zhihu.com/p/381739245]

## 连接数据库

npx prisma db pull 从数据库中同步model模型过来
npx prisma generate 在node_modules下生成客户端

## 数据库设计

1、用户表

CREATE TABLE USER (

id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',

nickname VARCHAR(255) NOT NULL COMMENT '昵称',

avatar_url VARCHAR(255) NOT NULL COMMENT '用户头像',

user_account VARCHAR(255) NOT NULL COMMENT '账号',

user_password VARCHAR(255) NOT NULL COMMENT '密码',

phone VARCHAR(255) NOT NULL COMMENT '手机号码',

gender TINYINT NOT NULL COMMENT '性别',

email VARCHAR(255) NOT NULL COMMENT '邮箱',

user_status TINYINT NOT NULL COMMENT '用户态 1 开启 2 禁用',

is_delete TINYINT NOT NULL COMMENT '是否删除 1 未删除 2 删除',

created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',

updated_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE
CURRENT_TIMESTAMP COMMENT '更新时间'

) COMMENT = '用户表'

## 需求分析

一、注册
1、前端：
账号： 不少于4位
密码： 不少于8位，包含大小写特殊符号数字
再次输入密码
加密传输

2、后端：
1、账号密码重复密码存在
2、密码与重复密码一致
3、账号密码格式校验
4、账号是否重复
5、插入数据库
