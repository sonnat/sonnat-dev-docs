import { Button, Menu, MenuItem, MenuItemGroup } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "MenuWithGroupedItemsDemo";

const demoCode = `import { Button, Menu, MenuItem, MenuItemGroup } from "@sonnat/ui";
import * as React from "react";

const MenuWithGroupedItemsDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef();

  const closeCallback = () => void setMenuOpen(false);

  return (
    <React.Fragment>
      <Button
        aria-controls="with-grouped-items-0"
        ref={anchorElement}
        size="small"
        variant="inlined"
        label="Toggle the menu"
        onClick={() => void setMenuOpen(o => !o)}
      />
      <Menu
        id="with-grouped-items-0"
        open={isMenuOpen}
        onOutsideClick={closeCallback}
        anchorNodeReference={anchorElement}
      >
        <MenuItemGroup title="1st Group">
          <MenuItem onClick={closeCallback}>First item</MenuItem>
          <MenuItem onClick={closeCallback}>Second item</MenuItem>
          <MenuItem onClick={closeCallback}>Third item</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="2nd Group">
          <MenuItem onClick={closeCallback}>Fourth item</MenuItem>
          <MenuItem onClick={closeCallback}>Fifth item</MenuItem>
          <MenuItem onClick={closeCallback}>Sixth item</MenuItem>
        </MenuItemGroup>
        <MenuItem onClick={closeCallback}>Seventh item</MenuItem>
        <MenuItem onClick={closeCallback}>Eighth item</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuWithGroupedItemsDemo;
`;

const MenuWithGroupedItemsDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef<HTMLButtonElement>(null);

  const closeCallback = () => void setMenuOpen(false);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Button
          aria-controls="with-grouped-items-0"
          ref={anchorElement}
          size="small"
          variant="inlined"
          label="Toggle the menu"
          onClick={() => void setMenuOpen(o => !o)}
        />
        <Menu
          id="with-grouped-items-0"
          open={isMenuOpen}
          onOutsideClick={closeCallback}
          anchorNodeReference={anchorElement}
        >
          <MenuItemGroup title="1st Group">
            <MenuItem onClick={closeCallback}>First item</MenuItem>
            <MenuItem onClick={closeCallback}>Second item</MenuItem>
            <MenuItem onClick={closeCallback}>Third item</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="2nd Group">
            <MenuItem onClick={closeCallback}>Fourth item</MenuItem>
            <MenuItem onClick={closeCallback}>Fifth item</MenuItem>
            <MenuItem onClick={closeCallback}>Sixth item</MenuItem>
          </MenuItemGroup>
          <MenuItem onClick={closeCallback}>Seventh item</MenuItem>
          <MenuItem onClick={closeCallback}>Eighth item</MenuItem>
        </Menu>
      </React.Fragment>
    </DemoBox>
  );
};

MenuWithGroupedItemsDemo.displayName = componentName;

export default MenuWithGroupedItemsDemo;
