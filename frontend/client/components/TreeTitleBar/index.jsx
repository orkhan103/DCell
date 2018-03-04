import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import React, {Component} from 'react'

const TreeTitlebar = (props) => {

  const genes = props.genes.toJS()

  console.log(genes)

  let message = ''

  const searchResult = props.result
  if(searchResult !== null) {
    const geneNames = Object.values(genes)
    const geneStr = geneNames.join(', ')
    message = 'Explanation of growth phenotype for ' + geneStr
  }

  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle
          text="DCell v1.4"
          style={{marginLeft: '1em'}}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarTitle text={message} />
        <ToolbarSeparator />
      </ToolbarGroup>
    </Toolbar>
  )
}

export default TreeTitlebar