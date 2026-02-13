/**
 * Affiliate placement configuration (ESM)
 *
 * Single source of truth for CTA content across all articles.
 * Used by rehype-affiliate-cta plugin in astro.config.mjs.
 * Update URLs and copy here when affiliate programs change.
 */

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  fireworks: {
    name: '不用品回収FireWorks',
    network: 'A8',
    rewardYen: 8000,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+6CMH2Q+4X26+NTJWY',
  },
  ihin110: {
    name: '遺品整理110番',
    network: 'A8',
    rewardYen: 6000,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+61WO6Q+39GM+5MFT42',
  },
  jinsokuKatadukeya: {
    name: '迅速片付け屋',
    network: 'A8',
    rewardYen: 4135,
    status: 'pending',
    affiliateUrl: '',
  },
};

export const affiliatePlacements = {
  top: {
    title: '不用品回収の無料見積もりをまとめて確認',
    description:
      '遺品整理110番は最短即日対応にも対応。まずは回収量と希望日を入力して、料金目安をチェックできます。',
    buttonText: '遺品整理110番の無料見積もりを確認する →',
    affiliateUrl: affiliatePrograms.ihin110.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '大型回収やまとめ処分を相談したい方へ',
    description:
      'FireWorksは大量回収の相談と相性が良いサービスです。回収条件を整理しながら比較検討できます。',
    buttonText: 'FireWorksの見積もり条件を見る →',
    affiliateUrl: affiliatePrograms.fireworks.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最後に料金条件を再確認して依頼先を決定',
    description:
      '迅速片付け屋は審査中のため、提携後に正式リンクへ差し替え予定です。比較前の候補としてチェックしておきましょう。',
    buttonText: '迅速片付け屋の最新情報を確認する →',
    affiliateUrl: affiliatePrograms.jinsokuKatadukeya.affiliateUrl,
    note: PR_NOTE,
  },
};
