import React from "react";
import { createComponent } from "@lit-labs/react";
import {FwAvatar} from "@fw-components/fw-avatar/src/fw-avatar";
import {FwAvatarGroup} from "@fw-components/fw-avatar/src/fw-avatar-group";
import { TestView as TestViewWc } from "./test_view";

const FwAvatarC = createComponent({
  react: React,
  tagName: "fw-avatar",
  elementClass: FwAvatar,
});

const TestView = createComponent({
  react: React,
  tagName: "test-view",
  elementClass: TestViewWc,
  events : {
    itemClicked: "item-clicked"
  }
});

const FwAvatarGroupC = createComponent({
  react: React,
  tagName: "fw-avatar-group",
  elementClass: FwAvatarGroup,
  events : {
    itemClicked: "item-clicked"
  }
});

export {FwAvatarGroupC, FwAvatarC, TestView };
