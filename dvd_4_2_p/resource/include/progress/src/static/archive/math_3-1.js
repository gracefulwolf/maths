window.TOV = window.TOV || {};
window.TOV.archive = window.TOV.archive || {};

window.TOV.archive['math_3-1'] = {
  names: {
    common: [
      {
        name: '공통 자료',
        inner: [
          { name: '수학', icon: 'pdf' },
          { name: '수학 익힘', icon: 'pdf' },
          { name: '지도서', icon: 'pdf' },
          { name: '지도서 총론', icon: 'pdf' },
        ],
      },
      { name: '교수ㆍ학습자료', icon: 'folder' },
    ],
    corner: [
      { name: '수업용\nPPT', icon: 'ppt' },
      {
        name: 'PDF 자료',
        inner: [
          { name: '수학', icon: 'pdf' },
          { name: '지도서', icon: 'pdf' },
          { name: '수학 익힘', icon: 'pdf' },
        ],
      },
      { name: '형성\n평가', icon: 'hwp' },
      {
        name: '단원\n평가',
        collapsed: true,
        bubbles: [
          { name: '기본 4회', icon: 'hwp' },
          { name: '보충 2회', icon: 'hwp' },
          { name: '심화 2회', icon: 'hwp' },
          { name: '(지도서)\n보충,심화\n단원평가', icon: 'hwp' },
        ],
      },
      {
        name: '성취도\n진단평가',
        collapsed: true,
        bubbles: [
          { name: '기본 2회', icon: 'hwp' },
          { name: '보충 1회', icon: 'hwp' },
        ],
      },
      {
        name: '준비물',
        collapsed: true,
        bubbles: [
          { name: '교구 목록', icon: 'hwp' },
          { name: '준비물', icon: 'hwp' },
        ],
      },
    ],
  },
  datas: {
    common: [
      [
        { disabled: false, fileUrl: '공통자료 수학.pdf' },
        { disabled: false, fileUrl: '공통자료 수학익힘.pdf' },
        { disabled: false, fileUrl: '공통자료 지도서.pdf' },
        { disabled: false, fileUrl: '공통자료 지도서총론.pdf' },
      ],
      { disabled: false, fileUrl: '교수학습자료 폴더' },
    ],
    lessons: [
      // 1단원
      [
        // 공통
        [
          [
            { fileUrl: '1단원 1차시 단원평가 기본 4회.hwp', disabled: false },
            { fileUrl: '1단원 1차시 단원평가 보충 2회.hwp', disabled: false },
            { fileUrl: '1단원 1차시 단원평가 심화 2회.hwp', disabled: false },
            { fileUrl: '1단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: false },
          ],
          [
            { fileUrl: '1단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: false },
            { fileUrl: '1단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: false },
          ],
          [
            { fileUrl: '1단원 1차시 준비물 교구 목록.hwp', disabled: false },
            { fileUrl: '1단원 1차시 준비물 준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '1단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '1단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 1차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '1단원 2차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '1단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 2차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '1단원 3차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '1단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 3차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '1단원 4차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '1단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 4차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '1단원 5차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '1단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 5차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '1단원 6차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '1단원 6차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 6차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 6차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '1단원 7차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '1단원 7차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 7차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 7차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '1단원 8차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '1단원 8차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 8차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 8차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '1단원 8차시 형성평가.hwp', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '1단원 9차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '1단원 9차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 9차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 9차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '1단원 9차시 형성평가.hwp', disabled: true },
        ],
        // 10차시
        [
          { fileUrl: '1단원 10차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '1단원 10차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '1단원 10차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '1단원 10차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '1단원 10차시 형성평가.hwp', disabled: true },
        ],
      ],
      // 2단원
      [
        // 공통
        [
          [
            { fileUrl: '2단원 1차시 단원평가 기본 4회.hwp', disabled: false },
            { fileUrl: '2단원 1차시 단원평가 보충 2회.hwp', disabled: false },
            { fileUrl: '2단원 1차시 단원평가 심화 2회.hwp', disabled: false },
            { fileUrl: '2단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: false },
          ],
          [
            { fileUrl: '2단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: false },
            { fileUrl: '2단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: false },
          ],
          [
            { fileUrl: '2단원 1차시 준비물 교구 목록.hwp', disabled: false },
            { fileUrl: '2단원 1차시 준비물 준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '2단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '2단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 1차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '2단원 2차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '2단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 2차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '2단원 3차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '2단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 3차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '2단원 4차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '2단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 4차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '2단원 5차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '2단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 5차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '2단원 6차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '2단원 6차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 6차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 6차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '2단원 7차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '2단원 7차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 7차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 7차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '2단원 8차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '2단원 8차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 8차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 8차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '2단원 8차시 형성평가.hwp', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '2단원 9차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '2단원 9차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 9차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 9차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '2단원 9차시 형성평가.hwp', disabled: true },
        ],
        // 10차시
        [
          { fileUrl: '2단원 10차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '2단원 10차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '2단원 10차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '2단원 10차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '2단원 10차시 형성평가.hwp', disabled: true },
        ],
      ],
      // 3단원
      [
        // 공통
        [
          [
            { fileUrl: '3단원 1차시 단원평가 기본 4회.hwp', disabled: false },
            { fileUrl: '3단원 1차시 단원평가 보충 2회.hwp', disabled: false },
            { fileUrl: '3단원 1차시 단원평가 심화 2회.hwp', disabled: false },
            { fileUrl: '3단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: false },
          ],
          [
            { fileUrl: '3단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: false },
            { fileUrl: '3단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: false },
          ],
          [
            { fileUrl: '3단원 1차시 준비물 교구 목록.hwp', disabled: false },
            { fileUrl: '3단원 1차시 준비물 준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '3단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '3단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 1차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '3단원 2차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '3단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 2차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '3단원 3차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '3단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 3차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '3단원 4차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '3단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 4차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '3단원 5차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '3단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 5차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '3단원 6차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '3단원 6차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 6차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 6차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '3단원 7차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '3단원 7차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 7차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 7차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '3단원 7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '3단원 8차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '3단원 8차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '3단원 8차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '3단원 8차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '3단원 8차시 형성평가.hwp', disabled: true },
        ],
      ],
      // 4단원
      [
        // 공통
        [
          [
            { fileUrl: '4단원 1차시 단원평가 기본 4회.hwp', disabled: false },
            { fileUrl: '4단원 1차시 단원평가 보충 2회.hwp', disabled: false },
            { fileUrl: '4단원 1차시 단원평가 심화 2회.hwp', disabled: false },
            { fileUrl: '4단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: false },
          ],
          [
            { fileUrl: '4단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: false },
            { fileUrl: '4단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: false },
          ],
          [
            { fileUrl: '4단원 1차시 준비물 교구 목록.hwp', disabled: false },
            { fileUrl: '4단원 1차시 준비물 준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '4단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '4단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 1차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '4단원 2차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '4단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 2차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '4단원 3차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '4단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 3차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '4단원 4차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '4단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 4차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '4단원 5차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '4단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 5차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '4단원 6차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '4단원 6차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 6차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 6차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '4단원 7차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '4단원 7차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 7차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 7차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '4단원 7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '4단원 8차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '4단원 8차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 8차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 8차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '4단원 8차시 형성평가.hwp', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '4단원 9차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '4단원 9차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '4단원 9차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '4단원 9차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '4단원 9차시 형성평가.hwp', disabled: true },
        ],
      ],
      // 5단원
      [
        // 공통
        [
          [
            { fileUrl: '5단원 1차시 단원평가 기본 4회.hwp', disabled: false },
            { fileUrl: '5단원 1차시 단원평가 보충 2회.hwp', disabled: false },
            { fileUrl: '5단원 1차시 단원평가 심화 2회.hwp', disabled: false },
            { fileUrl: '5단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: false },
          ],
          [
            { fileUrl: '5단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: false },
            { fileUrl: '5단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: false },
          ],
          [
            { fileUrl: '5단원 1차시 준비물 교구 목록.hwp', disabled: false },
            { fileUrl: '5단원 1차시 준비물 준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '5단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '5단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 1차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '5단원 2차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '5단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 2차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '5단원 3차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '5단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 3차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '5단원 4차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '5단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 4차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '5단원 5차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '5단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 5차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '5단원 6차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '5단원 6차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 6차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 6차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '5단원 7차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '5단원 7차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 7차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 7차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '5단원 8차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '5단원 8차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 8차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 8차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '5단원 8차시 형성평가.hwp', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '5단원 9차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '5단원 9차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 9차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 9차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '5단원 9차시 형성평가.hwp', disabled: true },
        ],
        // 10차시
        [
          { fileUrl: '5단원 10차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '5단원 10차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '5단원 10차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '5단원 10차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '5단원 10차시 형성평가.hwp', disabled: true },
        ],
      ],
      // 6단원
      [
        // 공통
        [
          [
            { fileUrl: '6단원 1차시 단원평가 기본 4회.hwp', disabled: false },
            { fileUrl: '6단원 1차시 단원평가 보충 2회.hwp', disabled: false },
            { fileUrl: '6단원 1차시 단원평가 심화 2회.hwp', disabled: false },
            { fileUrl: '6단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: false },
          ],
          [
            { fileUrl: '6단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: false },
            { fileUrl: '6단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: false },
          ],
          [
            { fileUrl: '6단원 1차시 준비물 교구 목록.hwp', disabled: false },
            { fileUrl: '6단원 1차시 준비물 준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '6단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '6단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 1차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '6단원 2차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '6단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 2차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '6단원 3차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '6단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 3차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '6단원 4차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '6단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 4차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '6단원 5차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '6단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 5차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '6단원 6차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '6단원 6차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 6차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 6차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '6단원 7차시 수업용PPT.ppt', disabled: false },
          [
            { fileUrl: '6단원 7차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 7차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 7차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '6단원 8차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '6단원 8차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 8차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 8차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '6단원 8차시 형성평가.hwp', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '6단원 9차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '6단원 9차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 9차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 9차시 PDF 자료 수학 익힘.pdf', disabled: false },
          ],
          { fileUrl: '6단원 9차시 형성평가.hwp', disabled: true },
        ],
        // 10차시
        [
          { fileUrl: '6단원 10차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '6단원 10차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 10차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 10차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '6단원 10차시 형성평가.hwp', disabled: true },
        ],
        // 11차시
        [
          { fileUrl: '6단원 11차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '6단원 11차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '6단원 11차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '6단원 11차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '6단원 11차시 형성평가.hwp', disabled: true },
        ],
      ],
      // 7단원
      [
        // 공통
        [
          [
            { fileUrl: '7단원 1차시 단원평가 기본 4회.hwp', disabled: true },
            { fileUrl: '7단원 1차시 단원평가 보충 2회.hwp', disabled: true },
            { fileUrl: '7단원 1차시 단원평가 심화 2회.hwp', disabled: true },
            { fileUrl: '7단원 1차시 단원평가 (지도서) 보충,심화 단원평가.hwp', disabled: true },
          ],
          [
            { fileUrl: '7단원 1차시 성취도 진단평가 기본 2회.hwp', disabled: true },
            { fileUrl: '7단원 1차시 성취도 진단평가 보충 1회.hwp', disabled: true },
          ],
          [
            { fileUrl: '7단원 1차시 준비물 교구 목록.hwp', disabled: true },
            { fileUrl: '7단원 1차시 준비물.hwp', disabled: false, noBubble: true },
          ],
        ],
        // 1차시
        [
          { fileUrl: '7단원 1차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '7단원 1차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '7단원 1차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '7단원 1차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '7단원 1차시 형성평가.hwp', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '7단원 2차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '7단원 2차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '7단원 2차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '7단원 2차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '7단원 2차시 형성평가.hwp', disabled: true },
        ],
        // 3차시
        [
          { fileUrl: '7단원 3차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '7단원 3차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '7단원 3차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '7단원 3차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '7단원 3차시 형성평가.hwp', disabled: true },
        ],
        // 4차시
        [
          { fileUrl: '7단원 4차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '7단원 4차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '7단원 4차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '7단원 4차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '7단원 4차시 형성평가.hwp', disabled: true },
        ],
        // 5차시
        [
          { fileUrl: '7단원 5차시 수업용PPT.ppt', disabled: true },
          [
            { fileUrl: '7단원 5차시 PDF 자료 수학.pdf', disabled: false },
            { fileUrl: '7단원 5차시 PDF 자료 지도서.pdf', disabled: false },
            { fileUrl: '7단원 5차시 PDF 자료 수학 익힘.pdf', disabled: true },
          ],
          { fileUrl: '7단원 5차시 형성평가.hwp', disabled: true },
        ],
      ],
    ],
  },
};
