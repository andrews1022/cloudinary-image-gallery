export type CldFolder = {
  name: string;
  path: string;
};

export type CldSearchResults = {
  next_cursor: string;
  rate_limit_allowed: number;
  rate_limit_remaining: number;
  rate_limit_reset_at: string;
  resources: CldResource[];
  time: number;
  total_count: number;
};

export type CldResource = {
  access_control: null;
  access_mode: string;
  aspect_ratio: number;
  asset_id: string;
  backup_bytes: number;
  bytes: number;
  created_at: string;
  created_by: null;
  etag: string;
  filename: string;
  folder: string;
  format: string;
  height: number;
  last_updated: {
    context_updated_at: string;
    tags_updated_at: string;
    updated_at: string;
  };
  pixels: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  status: string;
  type: string;
  uploaded_at: string;
  uploaded_by: null;
  url: string;
  version: number;
  width: number;
};

export type CldUploadedImage = {
  event: string;
  info: {
    access_mode: string;
    asset_id: string;
    batchId: string;
    bytes: number;
    created_at: string;
    etag: string;
    folder: string;
    format: string;
    height: number;
    id: string;
    original_filename: string;
    path: string;
    placeholder: boolean;
    public_id: string;
    resource_type: string;
    secure_url: string;
    signature: string;
    tags: string[];
    thumbnail_url: string;
    type: string;
    url: string;
    version: number;
    version_id: string;
    width: number;
  };
};
