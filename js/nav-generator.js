// 導航生成器 - 完全自動化
(function() {
    // 直接在這裡定義月份配置，避免外部依賴
    const MONTHS = {
        '2025Jul.html': '2025_07月'
        ,'2025Aug.html': '2025_08月'
        ,'2025Sep.html': '2025_09月'
        ,'2025Oct.html': '2025_10月'
        ,'2025Nov.html': '2025_11月'
        ,'2025Dec.html': '2025_12月'
        ,'2026Jan.html': '2026_01月'
        ,'2026Feb.html': '2026_02月'
        ,'2026Mar.html': '2026_03月'
        ,'2026Apr.html': '2026_04月'
        ,'2026May.html': '2026_05月'
    };
    
    function generateNav() {
        // 處理桌面版導航
        const navMenu = document.querySelector('.site-menu#nav-menu');
        if (!navMenu) return;
        
        let menuHTML = '';
        const currentFile = window.location.pathname.split('/').pop();
        
        Object.entries(MONTHS).forEach(([file, title]) => {
            const isActive = file === currentFile ? ' class="active"' : '';
            menuHTML += `<li${isActive}><a href="${file}">${title}</a></li>`;
        });
        
        navMenu.innerHTML = menuHTML;
        
        // 手動複製到手機版（確保手機版也有導航）
        const mobileMenuBody = document.querySelector('.site-mobile-menu-body');
        if (mobileMenuBody) {
            // 清除舊的導航
            const oldMobileNav = mobileMenuBody.querySelector('.site-nav-wrap');
            if (oldMobileNav) {
                oldMobileNav.remove();
            }
            
            // 複製新的導航
            const mobileNav = navMenu.cloneNode(true);
            mobileNav.setAttribute('class', 'site-nav-wrap');
            mobileMenuBody.appendChild(mobileNav);
        }
    }
    
    // 立即執行，並確保在 navbar.js 之前執行
    generateNav();
    
    // 也在 DOM 載入後再執行一次，確保萬無一失
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateNav);
    }
})();