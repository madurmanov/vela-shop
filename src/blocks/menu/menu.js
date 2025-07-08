(function () {
  const BURGER_BUTTON_CLASS = 'Button_burger';
  const BURGER_BUTTON_OPEN_CLASS = 'Button_burgerOpen';
  const MENU_BUTTON_CLASS = 'Menu-Item-Button_hasMenu';
  const MENU_ITEM_CLASS = 'Menu-Item';
  const MENU_ITEM_ACTIVE = 'Menu-Item_active';
  const MENU_ITEM_CATALOG = 'Menu-Item_catalog';
  const SUBMENU_ITEM_CLASS = 'Menu-Item-Submenu-List-Item';
  const SUBMENU_ITEM_ACTIVE_CLASS = 'Menu-Item-Submenu-List-Item_active';
  const SUBMENU_ITEM_HAS_MENU_CLASS = 'Menu-Item-Submenu-List-Item_hasMenu';
  const INNER_SUBMENU_CLASS = 'Menu-Item-Submenu-InnerSubmenu';
  const INNER_SUBMENU_ACTIVE_CLASS = 'Menu-Item-Submenu-InnerSubmenu_active';
  const INNER_SUBMENU_ITEM_CLASS = 'Menu-Item-Submenu-InnerSubmenu-List-Item';
  const INNER_SUBMENU_ITEM_LINK_CLASS = 'Menu-Item-Submenu-InnerSubmenu-List-Item-Link';

  document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector(`.${BURGER_BUTTON_CLASS}`);

    function initSubmenu(menuItem) {
      menuItem.querySelectorAll(`.${SUBMENU_ITEM_ACTIVE_CLASS}`).forEach((item) => {
        item.classList.remove(SUBMENU_ITEM_ACTIVE_CLASS);
      });

      const submenuItem = menuItem.querySelector(`.${SUBMENU_ITEM_CLASS}`);

      if (submenuItem) {
        submenuItem.classList.add(SUBMENU_ITEM_ACTIVE_CLASS);

        menuItem.querySelectorAll(`.${INNER_SUBMENU_CLASS}`).forEach((innerSubmenu) => {
          innerSubmenu.classList.remove(INNER_SUBMENU_ACTIVE_CLASS);
        });

        const secondSubmenu = menuItem.querySelector(`.${INNER_SUBMENU_CLASS}[data-secondsubmenu$="-1"]`);
        if (secondSubmenu) {
          secondSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
        }

        const thirdSubmenu = menuItem.querySelector(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu$="-1"]`);
        if (thirdSubmenu) {
          thirdSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
        }
      }
    }

    function toggleBurger() {
      if (burgerButton && !burgerButton.classList.contains(BURGER_BUTTON_OPEN_CLASS)) {
        burgerButton.classList.add(BURGER_BUTTON_OPEN_CLASS);
      } else {
        burgerButton.classList.remove(BURGER_BUTTON_OPEN_CLASS);
      }
    }

    function toggleCatalog() {
      const catalogItem = document.querySelector(`.${MENU_ITEM_CATALOG}`);

      if (catalogItem && !catalogItem.classList.contains(MENU_ITEM_ACTIVE)) {
        initSubmenu(catalogItem);
        catalogItem.classList.add(MENU_ITEM_ACTIVE);
      } else {
        catalogItem.classList.remove(MENU_ITEM_ACTIVE);
      }
    }

    if (burgerButton) {
      burgerButton.addEventListener('click', () => {
        toggleBurger();
        toggleCatalog();
      });
    }

    const menuItems = document.querySelectorAll(`.${MENU_ITEM_CLASS}`);
    document.querySelectorAll(`.${MENU_BUTTON_CLASS}`).forEach((button) => {
      button.addEventListener('mouseenter', () => {
        const menuItem = button.parentElement;
        initSubmenu(menuItem);
        menuItems.forEach((item) => {
          item.classList.remove(MENU_ITEM_ACTIVE);
        });
        menuItem.classList.add(MENU_ITEM_ACTIVE);

        if (burgerButton && burgerButton.classList.contains(BURGER_BUTTON_OPEN_CLASS)) {
          burgerButton.classList.remove(BURGER_BUTTON_OPEN_CLASS);
        }
      });

      button.addEventListener('mouseleave', () => {
        menuItems.forEach((item) => {
          item.classList.remove(MENU_ITEM_ACTIVE);
        });
      });
    });

    document.querySelectorAll(`.${SUBMENU_ITEM_CLASS}`).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        if (item.classList.contains(SUBMENU_ITEM_HAS_MENU_CLASS)) {
          item.parentElement.querySelectorAll(`.${SUBMENU_ITEM_CLASS}`).forEach((submenuItem) => submenuItem.classList.remove(SUBMENU_ITEM_ACTIVE_CLASS));
          item.classList.add(SUBMENU_ITEM_ACTIVE_CLASS);

          const secondSubmenu = document.querySelector(`.${INNER_SUBMENU_CLASS}[data-secondsubmenu=${item.dataset.secondsubmenu}]`);
          const thirdSubmenu = document.querySelector(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu=${item.dataset.thirdsubmenu}]`);

          if (secondSubmenu) {
            const secondSubmenuParent = secondSubmenu.parentElement;

            secondSubmenuParent.querySelectorAll(`.${INNER_SUBMENU_ACTIVE_CLASS}`).forEach((activeInnerSubmenu) => {
              activeInnerSubmenu.classList.remove(INNER_SUBMENU_ACTIVE_CLASS);
            });

            secondSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);

            if (thirdSubmenu) {
              thirdSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
            }
          }
        }
      });
    });

    document.querySelectorAll(`.${INNER_SUBMENU_ITEM_CLASS}`).forEach((item) => {
      item.querySelector(`.${INNER_SUBMENU_ITEM_LINK_CLASS}`).addEventListener('mouseenter', () => {
        const thirdSubmenu = document.querySelector(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu=${item.dataset.thirdsubmenu}]`);

        if (thirdSubmenu) {
          item
            .closest(`.${MENU_ITEM_CLASS}`)
            .querySelectorAll(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu]`)
            .forEach((innerSubmenu) => innerSubmenu.classList.remove(INNER_SUBMENU_ACTIVE_CLASS));
          thirdSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
        }
      });
    });
  });
})();
