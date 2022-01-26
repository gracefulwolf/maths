window.MATH = window.MATH || {};
window.MATH.archive = window.MATH.archive || {};

window.MATH.archive['math_4-1'] = {
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
      { name: '교수ㆍ학습 자료', icon: 'folder' },
    ],
    corner: [
      { name: '수업용\n파워포인트\n(PPT)', icon: 'pptx' },
      {
        name: '피디에프(PDF) 자료',
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
          { name: '(지도서)\n보충,심화\n단원 평가', icon: 'hwp' },
        ],
      },
      {
        name: '성취도\n진단 평가',
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
    // common: [
    //   [
    //     { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF자료-수학 익힘.pdf', disabledLessons: [7] },
    //     { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF자료-수학.pdf' },
    //     { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF자료-지도서 총론.pdf', disabledLessons: [7] },
    //     { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF자료-지도서.pdf' },
    //   ],
    //   { disabled: false, folderUrl: '../../data/교수 학습 자료' },
    // ],
    lessons: [
      // 1단원
      [
        // 공통
        [
          [
            { fileUrl: '../../data/01/1단원 단원 평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/01/1단원 단원 평가_보충.hwp', disabled: false },
            { fileUrl: '../../data/01/1단원 단원 평가_심화.hwp', disabled: false },
            { fileUrl: '../../data/01/1단원 단원 평가_(지도서)보충,심화.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/01/1단원 성취도 진단평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/01/1단원 성취도 진단평가_보충.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/01/1단원 준비물_교구 목록.hwp', disabled: false },
            { fileUrl: '../../data/01/1단원 준비물_준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_1차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '../../data/01/1단원_2차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_2차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_2차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_2차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/01/1단원_2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '../../data/01/1단원_3차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_3차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/01/1단원_3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '../../data/01/1단원_4차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_4차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_4차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_4차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/01/1단원_4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '../../data/01/1단원_5차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_5차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_5차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_5차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/01/1단원_5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '../../data/01/1단원_6차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_6차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_6차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_6차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/01/1단원_6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '../../data/01/1단원_7차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_7차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_7차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_7차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/01/1단원_7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_8차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_8차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_9, 10차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_9, 10차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-수학 익힘/1단원_9, 10차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 10차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/01/PDF 자료-수학/1단원_놀이를 해요 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/01/PDF 자료-지도서/1단원_놀이를 해요 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/1단원_PDF 자료(수학).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/1단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/1단원_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/01/교수 학습 자료/1단원 교과역량점검표(교사용).hwp' },
        ],        
      ],
      // 2단원
      [
        // 공통
        [
          [
            { fileUrl: '../../data/02/2단원 단원 평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/02/2단원 단원 평가_보충.hwp', disabled: false },
            { fileUrl: '../../data/02/2단원 단원 평가_심화.hwp', disabled: false },
            { fileUrl: '../../data/02/2단원 단원 평가_(지도서)보충,심화.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/02/2단원 성취도 진단평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/02/2단원 성취도 진단평가_보충.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/02/2단원 준비물_교구 목록.hwp', disabled: false },
            { fileUrl: '../../data/02/2단원 준비물_준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_1차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '../../data/02/2단원_2차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_2차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_2차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_2차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '../../data/02/2단원_3차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_3차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '../../data/02/2단원_4차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_4차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_4차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_4차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '../../data/02/2단원_5차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_5차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_5차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_5차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '../../data/02/2단원_6차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_6차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_6차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_6차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '../../data/02/2단원_7차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_7차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_7차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_7차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '../../data/02/2단원_8차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_8차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_8차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_8차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_8차시 형성평가.hwp', disabled: false },
        ],
        // 9차시
        [
          { fileUrl: '../../data/02/2단원_9차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_9차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_9차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_9차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/02/2단원_9차시 형성평가.hwp', disabled: false },
        ],
        // 10차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_10차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_10차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 11차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_11, 12차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_11, 12차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-수학 익힘/2단원_11, 12차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 12차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/02/PDF 자료-수학/2단원_놀이를 해요 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/02/PDF 자료-지도서/2단원_놀이를 해요 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/2단원_PDF 자료(수학).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/2단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/2단원_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/02/교수 학습 자료/2단원 교과역량점검표(교사용).hwp' },
        ],        
      ],
      // 3단원
      [
        // 공통
        [
          [
            { fileUrl: '../../data/03/3단원 단원 평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/03/3단원 단원 평가_보충.hwp', disabled: false },
            { fileUrl: '../../data/03/3단원 단원 평가_심화.hwp', disabled: false },
            { fileUrl: '../../data/03/3단원 단원 평가_(지도서)보충,심화.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/03/3단원 성취도 진단평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/03/3단원 성취도 진단평가_보충.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/03/3단원 준비물_교구 목록.hwp', disabled: false },
            { fileUrl: '../../data/03/3단원 준비물_준비물.hwp', disabled: true },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_1차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '../../data/03/3단원_2차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_2차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_2차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_2차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/03/3단원_2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '../../data/03/3단원_3차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_3차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/03/3단원_3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '../../data/03/3단원_4차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_4차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_4차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_4차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/03/3단원_4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '../../data/03/3단원_5차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_5차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_5차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_5차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/03/3단원_5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '../../data/03/3단원_6차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_6차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_6차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_6차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/03/3단원_6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '../../data/03/3단원_7차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_7차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_7차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_7차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/03/3단원_7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_8차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_8차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_9, 10차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_9, 10차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-수학 익힘/3단원_9, 10차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],        
        // 10차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/03/PDF 자료-수학/3단원_놀이를 해요 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/03/PDF 자료-지도서/3단원_놀이를 해요 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/3단원_PDF 자료(수학).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/3단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/3단원_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/03/교수 학습 자료/3단원 교과역량점검표(교사용).hwp' },
        ],        
      ],
      // 4단원
      [
        // 공통
        [
          [
            { fileUrl: '../../data/04/4단원 단원 평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/04/4단원 단원 평가_보충.hwp', disabled: false },
            { fileUrl: '../../data/04/4단원 단원 평가_심화.hwp', disabled: false },
            { fileUrl: '../../data/04/4단원 단원 평가_(지도서)보충,심화.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/04/4단원 성취도 진단평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/04/4단원 성취도 진단평가_보충.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/04/4단원 준비물_교구 목록.hwp', disabled: false },
            { fileUrl: '../../data/04/4단원 준비물_준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_1차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '../../data/04/4단원_2, 3차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_2, 3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_2, 3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_2, 3차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/04/4단원_2, 3차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '../../data/04/4단원_4, 5차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_4, 5차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_4, 5차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_4, 5차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/04/4단원_4, 5차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '../../data/04/4단원_6, 7차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_6, 7차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_6, 7차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_6, 7차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/04/4단원_6, 7차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '../../data/04/4단원_8차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_8차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_8차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_8차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/04/4단원_8차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '../../data/04/4단원_9차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_9차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_9차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_9차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/04/4단원_9차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_10차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_10차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 8차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_11, 12차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_11, 12차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-수학 익힘/4단원_11, 12차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/04/PDF 자료-수학/4단원_놀이를 해요 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/04/PDF 자료-지도서/4단원_놀이를 해요 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/4단원_PDF 자료(수학).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4단원_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/04/교수 학습 자료/4단원 교과역량점검표(교사용).hwp' },                
        ],     
      ],
      // 5단원
      [
        // 공통
        [
          [
            { fileUrl: '../../data/05/5단원 단원 평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/05/5단원 단원 평가_보충.hwp', disabled: false },
            { fileUrl: '../../data/05/5단원 단원 평가_심화.hwp', disabled: false },
            { fileUrl: '../../data/05/5단원 단원 평가_(지도서)보충,심화.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/05/5단원 성취도 진단평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/05/5단원 성취도 진단평가_보충.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/05/5단원 준비물_교구 목록.hwp', disabled: false },
            { fileUrl: '../../data/05/5단원 준비물_준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-수학 익힘/5단원_1차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '../../data/05/5단원_2차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_2차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_2차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-수학 익힘/5단원_2차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/05/5단원_2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '../../data/05/5단원_3차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-수학 익힘/5단원_3차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/05/5단원_3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '../../data/05/5단원_4차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_4차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_4차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-수학 익힘/5단원_4차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/05/5단원_4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '../../data/05/5단원_5, 6차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_5, 6차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_5, 6차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-수학 익힘/5단원_5, 6차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/05/5단원_5, 6차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_7차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_7차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: 'p', disabled: true },
        ],
        // 7차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_8, 9차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_8, 9차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-수학 익힘/5단원_8, 9차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 8차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/05/PDF 자료-수학/5단원_놀이를 해요 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/05/PDF 자료-지도서/5단원_놀이를 해요 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/5단원_PDF 자료(수학).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/5단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/5단원_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/05/교수 학습 자료/5단원 교과역량점검표(교사용).hwp' },
        ],        
      ],
      // 6단원
      [
        // 공통
        [
          [
            { fileUrl: '../../data/06/6단원 단원 평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/06/6단원 단원 평가_보충.hwp', disabled: false },
            { fileUrl: '../../data/06/6단원 단원 평가_심화.hwp', disabled: false },
            { fileUrl: '../../data/06/6단원 단원 평가_(지도서)보충,심화.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/06/6단원 성취도 진단평가_기본.hwp', disabled: false },
            { fileUrl: '../../data/06/6단원 성취도 진단평가_보충.hwp', disabled: false },
          ],
          [
            { fileUrl: '../../data/06/6단원 준비물_교구 목록.hwp', disabled: false },
            { fileUrl: '../../data/06/6단원 준비물_준비물.hwp', disabled: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_1차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '../../data/06/6단원_2차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_2차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_2차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_2차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/06/6단원_2차시 형성평가.hwp', disabled: false },
        ],
        // 3차시
        [
          { fileUrl: '../../data/06/6단원_3차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_3차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/06/6단원_3차시 형성평가.hwp', disabled: false },
        ],
        // 4차시
        [
          { fileUrl: '../../data/06/6단원_4차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_4차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_4차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_4차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/06/6단원_4차시 형성평가.hwp', disabled: false },
        ],
        // 5차시
        [
          { fileUrl: '../../data/06/6단원_5차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_5차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_5차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_5차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/06/6단원_5차시 형성평가.hwp', disabled: false },
        ],
        // 6차시
        [
          { fileUrl: '../../data/06/6단원_6차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_6차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_6차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_6차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/06/6단원_6차시 형성평가.hwp', disabled: false },
        ],
        // 7차시
        [
          { fileUrl: '../../data/06/6단원_7차시 수업용 PPT.pptx', disabled: false },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_7차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_7차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_7차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '../../data/06/6단원_7차시 형성평가.hwp', disabled: false },
        ],
        // 8차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_8차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_8차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 9차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_9, 10차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_9, 10차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-수학 익힘/6단원_9, 10차시 PDF 자료(수학 익힘).pdf', disabled: false },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 10차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/06/PDF 자료-수학/6단원_놀이를 해요 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/06/PDF 자료-지도서/6단원_놀이를 해요 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/6단원_PDF 자료(수학).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/6단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/6단원_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/06/교수 학습 자료/6단원 교과역량점검표(교사용).hwp' },
        ],        
      ],
      // 창의•융합
      [
        // 공통
        [
          [
            { fileUrl: '', disabled: true },
            { fileUrl: '', disabled: true },
            { fileUrl: '', disabled: true },
            { fileUrl: '', disabled: true },
          ],
          [
            { fileUrl: '', disabled: true },
            { fileUrl: '', disabled: true },
          ],
          [
            { fileUrl: '', disabled: true },
            { fileUrl: '../../data/창의융합/창의융합 준비물_준비물.hwp', disabled: false, noBubble: false },
          ],
        ],
        // 1차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/창의융합/창의융합_1차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/창의융합/창의융합_1차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 2차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/창의융합/창의융합_2차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/창의융합/창의융합_2차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 3차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/창의융합/창의융합_3차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/창의융합/창의융합_3차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 4차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/창의융합/창의융합_4차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/창의융합/창의융합_4차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 5차시
        [
          { fileUrl: '', disabled: true },
          [
            { fileUrl: '../../data/창의융합/창의융합_5차시 PDF 자료(수학).pdf', disabled: false },
            { fileUrl: '../../data/창의융합/창의융합_5차시 PDF 자료(지도서).pdf', disabled: false },
            { fileUrl: '', disabled: true },
          ],
          { fileUrl: '', disabled: true },
        ],
        // 공통자료, 교수 학습 자료
        [
          [
            { disabled: false, fileUrl: '../../data/공통 자료/창의융합_PDF 자료(수학).pdf' },
            { disabled: true, fileUrl: '../../data/공통 자료/6단원_PDF 자료(수학 익힘).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/창의융합_PDF 자료(지도서).pdf' },
            { disabled: false, fileUrl: '../../data/공통 자료/4-1 전단원 PDF 자료-지도서 총론.pdf' },
          ],
          { disabled: false, folderUrl: '../../data/창의융합/교수 학습 자료/창의융합 학습지도안.hwp' },
        ],            
      ],
    ],
  },
};
