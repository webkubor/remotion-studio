/**
 * Remotion Studio 工具函数库
 * 提供常用的工具函数，用于视频制作
 */

/**
 * 格式化时间
 * @param frames 帧数
 * @param fps 帧率
 * @returns 格式化的时间字符串 (MM:SS)
 */
export const formatTime = (frames: number, fps: number): string => {
  const totalSeconds = frames / fps;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * 格式化时间（带毫秒）
 * @param frames 帧数
 * @param fps 帧率
 * @returns 格式化的时间字符串 (MM:SS:ms)
 */
export const formatTimeWithMs = (frames: number, fps: number): string => {
  const totalSeconds = frames / fps;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const milliseconds = Math.floor((totalSeconds % 1) * 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};

/**
 * 将时间转换为帧数
 * @param time 时间字符串 (MM:SS 或 MM:SS:ms)
 * @param fps 帧率
 * @returns 帧数
 */
export const timeToFrames = (time: string, fps: number): number => {
  const parts = time.split(':').map(Number);
  let totalSeconds = 0;

  if (parts.length === 2) {
    // MM:SS
    totalSeconds = parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    // MM:SS:ms
    totalSeconds = parts[0] * 60 + parts[1] + parts[2] / 1000;
  }

  return Math.floor(totalSeconds * fps);
};

/**
 * 限制数值在指定范围内
 * @param value 数值
 * @param min 最小值
 * @param max 最大值
 * @returns 限制后的数值
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * 线性插值
 * @param start 起始值
 * @param end 结束值
 * @param progress 进度 (0-1)
 * @returns 插值结果
 */
export const lerp = (start: number, end: number, progress: number): number => {
  return start + (end - start) * progress;
};

/**
 * 将数值映射到另一个范围
 * @param value 输入值
 * @param inMin 输入范围最小值
 * @param inMax 输入范围最大值
 * @param outMin 输出范围最小值
 * @param outMax 输出范围最大值
 * @returns 映射后的值
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * 生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 随机数
 */
export const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * 生成随机整数
 * @param min 最小值
 * @param max 最大值
 * @returns 随机整数
 */
export const randomInt = (min: number, max: number): number => {
  return Math.floor(random(min, max));
};

/**
 * 从数组中随机选择一个元素
 * @param array 数组
 * @returns 随机元素
 */
export const randomChoice = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * 打乱数组
 * @param array 数组
 * @returns 打乱后的数组
 */
export const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * 将数组分成指定大小的块
 * @param array 数组
 * @param size 块大小
 * @returns 分块后的数组
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

/**
 * 数组去重
 * @param array 数组
 * @returns 去重后的数组
 */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

/**
 * 深度克隆对象
 * @param obj 对象
 * @returns 克隆后的对象
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * 合并对象
 * @param target 目标对象
 * @param sources 源对象
 * @returns 合并后的对象
 */
export const merge = <T extends object>(target: T, ...sources: Partial<T>[]): T => {
  return Object.assign(target, ...sources);
};

/**
 * 获取对象的键
 * @param obj 对象
 * @returns 键数组
 */
export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

/**
 * 获取对象的值
 * @param obj 对象
 * @returns 值数组
 */
export const values = <T extends object>(obj: T): T[keyof T][] => {
  return Object.values(obj) as T[keyof T][];
};

/**
 * 首字母大写
 * @param str 字符串
 * @returns 首字母大写的字符串
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 驼峰命名转短横线命名
 * @param str 驼峰命名字符串
 * @returns 短横线命名字符串
 */
export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * 短横线命名转驼峰命名
 * @param str 短横线命名字符串
 * @returns 驼峰命名字符串
 */
export const kebabToCamel = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * 截断字符串
 * @param str 字符串
 * @param maxLength 最大长度
 * @param suffix 后缀
 * @returns 截断后的字符串
 */
export const truncate = (str: string, maxLength: number, suffix: string = '...'): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
};

/**
 * 移除字符串两端的空白字符
 * @param str 字符串
 * @returns 处理后的字符串
 */
export const trim = (str: string): string => {
  return str.trim();
};

/**
 * 检查是否为有效的 URL
 * @param url URL 字符串
 * @returns 是否有效
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 检查是否为有效的邮箱
 * @param email 邮箱字符串
 * @returns 是否有效
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 检查是否为有效的颜色值
 * @param color 颜色字符串
 * @returns 是否有效
 */
export const isValidColor = (color: string): boolean => {
  const colorRegex = /^(#([0-9A-Fa-f]{3}){1,2}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)|hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)|hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\))$/;
  return colorRegex.test(color);
};

/**
 * 将十六进制颜色转换为 RGB
 * @param hex 十六进制颜色
 * @returns RGB 颜色对象
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * 将 RGB 转换为十六进制颜色
 * @param r 红色值 (0-255)
 * @param g 绿色值 (0-255)
 * @param b 蓝色值 (0-255)
 * @returns 十六进制颜色字符串
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
};

/**
 * 计算两个颜色之间的距离
 * @param color1 颜色1
 * @param color2 颜色2
 * @returns 颜色距离
 */
export const colorDistance = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return 0;

  return Math.sqrt(
    Math.pow(rgb1.r - rgb2.r, 2) +
      Math.pow(rgb1.g - rgb2.g, 2) +
      Math.pow(rgb1.b - rgb2.b, 2)
  );
};

/**
 * 延迟执行
 * @param ms 延迟时间（毫秒）
 * @returns Promise
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param wait 等待时间（毫秒）
 * @returns 防抖后的函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * 节流函数
 * @param func 要执行的函数
 * @param limit 时间限制（毫秒）
 * @returns 节流后的函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 缓存函数结果
 * @param func 要缓存的函数
 * @returns 带缓存的函数
 */
export const memoize = <T extends (...args: any[]) => any>(func: T): T => {
  const cache = new Map();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

/**
 * 生成唯一 ID
 * @param prefix 前缀
 * @returns 唯一 ID
 */
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 获取对象的嵌套属性
 * @param obj 对象
 * @param path 属性路径
 * @param defaultValue 默认值
 * @returns 属性值
 */
export const getNestedValue = <T>(
  obj: any,
  path: string,
  defaultValue?: T
): T | undefined => {
  const value = path.split('.').reduce((current, key) => current?.[key], obj);
  return value !== undefined ? value : defaultValue;
};

/**
 * 设置对象的嵌套属性
 * @param obj 对象
 * @param path 属性路径
 * @param value 值
 */
export const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
};

/**
 * 检查对象是否为空
 * @param obj 对象
 * @returns 是否为空
 */
export const isEmpty = (obj: any): boolean => {
  if (obj === null || obj === undefined) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  if (typeof obj === 'string') return obj.trim().length === 0;
  return false;
};

/**
 * 深度比较两个对象是否相等
 * @param obj1 对象1
 * @param obj2 对象2
 * @returns 是否相等
 */
export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== typeof obj2) return false;
  if (obj1 === null || obj2 === null) return obj1 === obj2;
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((item, index) => deepEqual(item, obj2[index]));
  }

  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
  }

  return false;
};

// 导出所有工具函数
export const Utils = {
  // 时间相关
  formatTime,
  formatTimeWithMs,
  timeToFrames,

  // 数学相关
  clamp,
  lerp,
  mapRange,
  random,
  randomInt,

  // 数组相关
  randomChoice,
  shuffle,
  chunk,
  unique,

  // 对象相关
  deepClone,
  merge,
  keys,
  values,
  getNestedValue,
  setNestedValue,
  isEmpty,
  deepEqual,

  // 字符串相关
  capitalize,
  camelToKebab,
  kebabToCamel,
  truncate,
  trim,

  // 验证相关
  isValidUrl,
  isValidEmail,
  isValidColor,

  // 颜色相关
  hexToRgb,
  rgbToHex,
  colorDistance,

  // 函数相关
  delay,
  debounce,
  throttle,
  memoize,

  // 其他
  generateId,
};

export default Utils;
