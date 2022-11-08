import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import Labs from "../labs";
import HelloWorld from "../labs/a6/hello-world";
import Assignment6 from "../labs/a6";
import WhoToFollowListItem from "../tuiter/who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "../tuiter/who-to-follow-list";
import PostSummaryItem from "../tuiter/post-summary-list/post-summary-item";
import PostSummaryList from "../tuiter/post-summary-list";
import ExploreComponent from "../tuiter/explore";
import TuitItem from "../tuiter/tuit-list/tuit-item";
import TuitStats from "../tuiter/tuit-list/tuit-stats";
import Tuiter from "../tuiter";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/Labs">
        <Labs/>
      </ComponentPreview>
      <ComponentPreview path="/HelloWorld">
        <HelloWorld/>
      </ComponentPreview>
      <ComponentPreview path="/Assignment6">
        <Assignment6/>
      </ComponentPreview>
      <ComponentPreview path="/WhoToFollowListItem">
        <WhoToFollowListItem/>
      </ComponentPreview>
      <ComponentPreview path="/WhoToFollowList">
        <WhoToFollowList/>
      </ComponentPreview>
      <ComponentPreview path="/PostSummaryItem">
        <PostSummaryItem/>
      </ComponentPreview>
      <ComponentPreview path="/PostSummaryList">
        <PostSummaryList/>
      </ComponentPreview>
      <ComponentPreview path="/ExploreComponent">
        <ExploreComponent/>
      </ComponentPreview>
      <ComponentPreview path="/TuitItem">
        <TuitItem/>
      </ComponentPreview>
      <ComponentPreview path="/TuitStats">
        <TuitStats/>
      </ComponentPreview>
      <ComponentPreview path="/Tuiter">
        <Tuiter/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;