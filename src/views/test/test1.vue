<template>
<el-container direction="vertical">
   <el-row style="margin: 10px;">

   <el-input
      placeholder="Filter keyword"
      v-model="filterText">
    </el-input>
</el-row>
<el-row>
    <el-tree style="margin: 10px"
       class="filter-tree"
       :data="data2"
       :props="defaultProps"
       node-key="id"
       default-expand-all
       :filter-node-method="filterNode"
       show-checkbox
       :expand-on-click-node="false"
       :render-content="renderContent"
       draggable
       ref="tree2">
     </el-tree>
   </el-row> 
</el-container>
</template>

<script>
/* eslint-disable */
let id = 1000;
export default {
  name: "app",
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    append(data) {
        console.log('append');
        const newChild = { id: id++, label: 'testtest', children: [] };
        console.log(newChild);
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      }
  },

  data() {
    return {
      filterText: "",
      data2: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1"
                },
                {
                  id: 10,
                  label: "Level three 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1"
            },
            {
              id: 6,
              label: "Level two 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1"
            },
            {
              id: 8,
              label: "Level two 3-2",
              detail: "this is level two 3-2",
              disabled: true
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        detail: "detail",
        label: "label",
        disable: "disabled"
      }
    };
  }
};
</script>
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>