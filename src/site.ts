/**
 * Copyright (c) 2026 Tetsuya Higashi
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { SiteProfile } from "../shared/ts/lib/profile";

/** Zephyr のドキュメント (Sphinx + Read the Docs テーマ) の設定. */
export const site: SiteProfile = {
  name: "Zephyr Doc Trans",
  host: "docs.zephyrproject.org",
  pathPrefix: "/",
  // 版を固定して読む (版を上げるときは, 画面で版を選ぶ). 最初は, 最新のリリース
  homeUrl: "https://docs.zephyrproject.org/4.4.0/index.html",
  contentSelectors: ['[role="main"]', "main"],
  removeSelectors: [".rst-versions"],
  titleSuffix: / [—–-] .*Documentation$/,
  // 左のメニュー (目次). ページごとに, 今の位置の枝が, 開いている
  menu: { type: "html", selector: ".wy-menu-vertical" },
  // 版は, パスの先頭 (`/4.4.0/`). 版の一覧は, ページの下にある版の切り替えの最初の一覧 (Downloads などは除く).
  // 翻訳のキャッシュも, 版ごとに分ける
  versions: { selector: ".rst-other-versions dl:first-of-type a", pattern: /^\/([^/]+)\// },
};
