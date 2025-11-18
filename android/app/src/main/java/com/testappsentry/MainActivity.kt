package com.testappsentry

import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import io.sentry.Sentry

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "TestAppSentry"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return object : ReactActivityDelegate(this, mainComponentName) {
      override fun getLaunchOptions(): Bundle {

        val imageList =
                arrayListOf(
                        "https://dummyimage.com/600x400/ffffff/000000.png",
                        "https://dummyimage.com/600x400/000000/ffffff.png"
                )

        Thread {
          Thread.sleep(5000)
          Sentry.logger().warn("SENTRY DEMO [Native]: Sentry.logger warn message")
        }.start()
        val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }
        return initialProperties
      }
    }
  }
}
