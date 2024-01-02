import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchUserData = createAsyncThunk(
  "userInfo/fetchUserData",
  async (query) => {
    try {
      const res = await fetch("url");
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const fetchUserMessages = createAsyncThunk(
  "userInfo/fetchUserMessages",
  async (query) => {
    try {
      const res = await fetch("url");
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const fetchUserApps = createAsyncThunk(
  "userInfo/fetchUserApps",
  async (query) => {
    try {
      const res = await fetch("url");
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const fetchUserWishlist = createAsyncThunk(
  "userInfo/fetchUserWishlist",
  async (query) => {
    try {
      const res = await fetch("url");
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
    wishlistLoading: false,
    wishlist: [],
    wishlistError: null,
    appsLoading: false,
    apps: [],
    appsError: null,
    messageLoading: false,
    messages: [],
    messageError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.error.message;
    });
    builder.addCase(fetchUserMessages.pending, (state) => {
      state.messageLoading = true;
    });
    builder.addCase(fetchUserMessages.fulfilled, (state, action) => {
      state.messageLoading = false;
      state.messages = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserMessages.rejected, (state, action) => {
      state.messageLoading = false;
      state.messages = [];
      state.messageError = action.error.message;
    });
    builder.addCase(fetchUserWishlist.pending, (state) => {
      state.wishlistLoading = true;
    });
    builder.addCase(fetchUserWishlist.fulfilled, (state, action) => {
      state.wishlistLoading = false;
      state.wishlist = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserWishlist.rejected, (state, action) => {
      state.wishlistLoading = false;
      state.wishlist = [];
      state.wishlistError = action.error.message;
    });
    builder.addCase(fetchUserApps.pending, (state) => {
      state.appsLoading = true;
    });
    builder.addCase(fetchUserApps.fulfilled, (state, action) => {
      state.appsLoading = false;
      state.apps = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserApps.rejected, (state, action) => {
      state.appsLoading = false;
      state.apps = [];
      state.appsError = action.error.message;
    });
  },
});

export default userInfoSlice.reducer;
