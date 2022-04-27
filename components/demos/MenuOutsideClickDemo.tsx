import { Button, Menu, MenuItem } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "MenuOutsideClickDemo";

const demoCode = `import { Button, Menu, MenuItem } from "@sonnat/ui";
import * as React from "react";

const MenuOutsideClickDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef();

  return (
    <React.Fragment>
      <Button
        aria-controls="simple-menu-2"
        ref={anchorElement}
        size="small"
        variant="inlined"
        label="Toggle the menu"
        onClick={() => void setMenuOpen(o => !o)}
      />
      <Menu
        id="simple-menu-2"
        open={isMenuOpen}
        anchorNodeReference={anchorElement}
        onOutsideClick={() => void setMenuOpen(false)}
      >
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>Third item</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuOutsideClickDemo;
`;

const MenuOutsideClickDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef<HTMLButtonElement>(null);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Button
          aria-controls="simple-menu-2"
          ref={anchorElement}
          size="small"
          variant="inlined"
          label="Toggle the menu"
          onClick={() => void setMenuOpen(o => !o)}
        />
        <Menu
          id="simple-menu-2"
          open={isMenuOpen}
          anchorNodeReference={anchorElement}
          onOutsideClick={() => void setMenuOpen(false)}
        >
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem>Third item</MenuItem>
        </Menu>
      </React.Fragment>
    </DemoBox>
  );
};

MenuOutsideClickDemo.displayName = componentName;

export default MenuOutsideClickDemo;
