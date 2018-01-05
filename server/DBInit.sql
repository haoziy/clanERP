CREATE DATABASE IF NOT EXISTS MDDB CHARACTER SET UTF8;

CREATE TABLE IF NOT EXISTS  `table_channel` (
`channel_id` VARCHAR ( 11 ) NOT NULL COMMENT '渠道id',
`channel_name` VARCHAR ( 20 ) NOT NULL COMMENT '渠道名称',
`channel_descrpition` VARCHAR ( 100 ) DEFAULT NULL COMMENT '渠道说明',
`channel_edit_time` TIMESTAMP ( 6 ) NULL DEFAULT NULL COMMENT '渠道最近一次更新时间',
`channel_active` INT ( 1 ) UNSIGNED DEFAULT '1' COMMENT '状态;用作虚拟删除',
PRIMARY KEY ( `channel_id` )
) ENGINE = INNODB DEFAULT CHARSET = utf8;


CREATE TABLE IF NOT EXISTS `table_channel_customer_binding` (
  `binding_id` varchar(11) NOT NULL COMMENT '渠道客户绑定id',
  `binding_channel_id` varchar(11) NOT NULL COMMENT '渠道id',
  `binding_customer_id` varchar(11) NOT NULL COMMENT '用户di',
  PRIMARY KEY (`binding_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE NOT EXISTS `table_customer` (
  `customer_id` varchar(11) NOT NULL COMMENT '意向客户id',
  `customer_name` varchar(20) NOT NULL COMMENT '意向客户名字',
  `customer_telephone` varchar(11) DEFAULT NULL COMMENT '意向客户联系手机',
  `customer_create_time` timestamp(6) NULL DEFAULT NULL COMMENT '意向用户添加时间',
  `customer_deal_state` int(1) unsigned zerofill DEFAULT '0' COMMENT '状态是否为已签约',
  `customer_avtive` int(1) unsigned DEFAULT '1' COMMENT '做虚拟删除',
  `customer_intention` varchar(255) DEFAULT NULL COMMENT '意向客户目的',
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--CREATE TABLE IF NOT EXISTS `table_customer` (
--  `customer_id` varchar(11) NOT NULL COMMENT '意向客户id',
--  `customer_name` varchar(20) NOT NULL COMMENT '意向客户名字',
--  `customer_create_time` timestamp(6) NULL DEFAULT NULL COMMENT '意向用户添加时间',
--  `customer_deal_state` int(1) unsigned zerofill DEFAULT '0' COMMENT '状态是否为已签约',
--  `customer_avtive` int(1) unsigned DEFAULT '1' COMMENT '做虚拟删除',
--  PRIMARY KEY (`customer_id`)
--) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS  `table_segment` (
  `segment_id` varchar(11) NOT NULL COMMENT '分段时间id',
  `segment_start` timestamp(6) NULL DEFAULT NULL COMMENT '开始时间',
  `segment_end` timestamp(6) NULL DEFAULT NULL COMMENT '结束时间',
  `segment_time` varchar(50) DEFAULT NULL COMMENT '时间段名称',
  PRIMARY KEY (`segment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `table_staff` (
  `staff_id` varchar(11) NOT NULL COMMENT '员工id',
  `staff_name` varchar(20) DEFAULT NULL COMMENT '员工姓名',
  `staff_telephone` varchar(11) DEFAULT NULL COMMENT '员工电话',
  `staff_active` int(1) unsigned DEFAULT '1' COMMENT '状态;用作虚拟删除',
  PRIMARY KEY (`staff_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `table_staff_customer_binding` (
  `binding_id` varchar(11) NOT NULL COMMENT '员工与客户绑定系表',
  `binding_staff_id` varchar(11) NOT NULL COMMENT '员工id',
  `binding_customer_id` varchar(11) NOT NULL COMMENT '客户id',
  PRIMARY KEY (`binding_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `table_user` (
  `user_id` varchar(11) NOT NULL COMMENT '用户id',
  `user_name` varchar(20) NOT NULL COMMENT '登录用户名',
  `user_password` varchar(50) NOT NULL COMMENT '加密后的用户密码',
  `user_nickname` varchar(20) DEFAULT NULL COMMENT '用户名称',
  `user_create_time` timestamp(6) NULL DEFAULT NULL COMMENT '用户新建时候的时间戳',
  `user_active` int(1) unsigned DEFAULT '1' COMMENT '用户状态;用作虚拟删除',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `table_inviter_customer_binding` (
  `binding_id` VARCHAR(11) NOT NULL,
  `customer_id` VARCHAR(11) NOT NULL,
  `staff_id` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`bing_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `table_dealer_customer_binding` (
  `binding_id` VARCHAR(11) NOT NULL,
  `customer_id` VARCHAR(11) NOT NULL,
  `staff_id` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`bing_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `table_segment_customer_binding` (
  `binding_id` VARCHAR(11) NOT NULL,
  `customer_id` VARCHAR(11) NOT NULL,
  `segment_id` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`binding_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;