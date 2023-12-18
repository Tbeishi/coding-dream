<template>
  <div>
    <el-upload
    class="avatar-uploader"
    :show-file-list="false"
    :on-success="handleSuccess"
    >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>

    <el-button
      type="primary"
      :icon="Plus"
      size="large"
      >选择图片</el-button
    >
    <el-button
      type="success"
      :icon="Upload"
      size="large"
      >上传头像</el-button
    >
</div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Upload } from '@element-plus/icons-vue'
const imageUrl = ref('')
const uploadRef = ref()

const handleSuccess = (res,file)=>{
  imageUrl.value = URL.createObjectURL(file.raw);
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  margin: 0 0 20px 20px;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
