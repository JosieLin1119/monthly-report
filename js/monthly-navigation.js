(function () {
    'use strict';

    // 月份配置
    const monthsConfig = [
        {
            key: '2025Jul',
            label: '2025_07月',
            file: '2025Jul.html',
            active: false
        },
        {
            key: '2025Aug',
            label: '2025_08月',
            file: 'index.html',
            active: true
        },
        // {
        //     key: '2025Sep',
        //     label: '2025_09月',
        //     file: '2025Sep.html',
        //     active: false
        //  },
        // {
        //     key: '2025Oct',
        //     label: '2025_10月',
        //     file: '2025Oct.html',
        //     active: false
        // },
        // {
        //     key: '2025Nov',
        //     label: '2025_11月',
        //     file: '2025Nov.html',
        //     active: false
        // },
        // {
        //     key: '2025Dec',
        //     label: '2025_12月',
        //     file: '2025Dec.html',
        //     active: false
        // }
    ];

    // 取得當前頁面檔名
    function getCurrentPageFile() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }

    // 設定當前頁面的 active 狀態
    function setActiveMonth() {
        const currentFile = getCurrentPageFile();
        monthsConfig.forEach(month => {
            month.active = (month.file === currentFile);
        });
    }

    // 生成導航選單 HTML
    function generateNavigation() {
        setActiveMonth();

        return monthsConfig.map(month => {
            const activeClass = month.active ? 'active' : '';
            return `<li class="${activeClass}"><a href="${month.file}">${month.label}</a></li>`;
        }).join('');
    }

    // 更新導航選單
    function updateNavigation() {
        const navContainer = document.querySelector('.js-clone-nav');
        if (navContainer) {
            navContainer.innerHTML = generateNavigation();
        }
    }

    // 當 monthsConfig 載入完成後執行
    document.addEventListener('DOMContentLoaded', function () {
        updateNavigation();
    });

    // 匯出配置供其他腳本使用
    window.MonthlyNavigation = {
        config: monthsConfig,
        getCurrentPageFile: getCurrentPageFile,
        updateNavigation: updateNavigation
    };

})();