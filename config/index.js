/*
 * Copyright (c) 2014-Now MUX Lab, All rights reseved.
 * @fileoverview | 扩展相关配置
 * @Author: mukuashi | mukuashi@icloud.com
 * @version 0.1 | 2019-07-08 // Initial version.
 * @Date:   2019-07-08 10:20:27
 * @Last Modified by: mukuashi
 * @Last Modified time: 2020-04-13 17:06:46
 */
import { env } from "./env";

let path = env === "production" ? "" : `${env}.`;

export default {
  key: "muxlab",
  api: "http://api.kquanr.com" // 自定义测试环境开关
};
