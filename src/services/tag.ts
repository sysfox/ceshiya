import type { PageSearchParams } from '@/services/common';
import type { TagType } from '@/models/tag';
import tagsMap from '@/mock/tagsMap';

export interface TagSearchParams extends PageSearchParams {
  name?: string;
}

/**
 * 搜索标签（本地）
 * @param params
 * @param allTags
 */
export function searchTags(params: TagSearchParams, allTags: TagType[]) {
  const { pageSize = 20, pageNum = 1, name } = params;
  let tags = allTags;
  if (name) {
    tags = allTags.filter((tag) => tag.indexOf(name) >= 0);
  }
  const startPos = pageSize * (pageNum - 1);
  const endPos = pageSize * pageNum;
  const resultDataList = tags.slice(startPos, endPos);
  return {
    total: tags.length,
    data: resultDataList,
  };
}

/**
 * 获取标签
 */
export function getTagsMap() {
  return tagsMap;
}
