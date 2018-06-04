"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var application = require("application");
application.on(application.launchEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    }
    else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});
application.on(application.suspendEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("SUSPEND: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("SUSPEND EVENT: " + args.ios);
    }
});
application.on(application.resumeEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("RESUME: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("RESUME EVENT: " + args.ios);
    }
});
application.on(application.displayedEvent, function (args) {
    // args is of type ApplicaitonEventData
    console.log("displayedEvent");
});
application.on(application.orientationChangedEvent, function (args) {
    // args is of type OrientationChangedEventData
    console.log("ORIENTATION: ", args.newValue); // "portrait", "landscape", "unknown"
});
application.on(application.exitEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("EXIT: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("EXIT EVENT: " + args.ios);
    }
});
application.on(application.lowMemoryEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("LOW MEMORY: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("LOW MEMORY: " + args.ios);
    }
});
application.on(application.uncaughtErrorEvent, function (args) {
    console.log("Uncaught Error: " + args.error);
});
var application_1 = require("application");
var MyDelegate = /** @class */ (function (_super) {
    __extends(MyDelegate, _super);
    function MyDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions);
        return true;
    };
    MyDelegate.prototype.applicationWillTerminate = function (application) {
        console.log("WILL TERMINATE !!!");
        console.log("applicationWillTerminate: ", application);
    };
    MyDelegate.prototype.applicationDidBecomeActive = function (application) {
        console.log("applicationDidBecomeActive: " + application);
    };
    MyDelegate.ObjCProtocols = [UIApplicationDelegate];
    return MyDelegate;
}(UIResponder));
application_1.ios.delegate = MyDelegate;
application.run({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQXlCO0FBQ3pCLHlDQUEyQztBQUUzQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJO0lBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2YsNkVBQTZFO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoQyxrRUFBa0U7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSTtJQUMxQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNmLHVFQUF1RTtRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixtREFBbUQ7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBSTtJQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNmLHVFQUF1RTtRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixtREFBbUQ7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFVBQUMsSUFBSTtJQUM1Qyx1Q0FBdUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLEVBQUUsVUFBQyxJQUFJO0lBQ3JELDhDQUE4QztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7QUFDdEYsQ0FBQyxDQUFDLENBQUM7QUFHSCxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxJQUFJO0lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2YsdUVBQXVFO1FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLG1EQUFtRDtRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFVBQUMsSUFBSTtJQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNmLHVFQUF1RTtRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixtREFBbUQ7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsSUFBSTtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUdILDJDQUFrQztBQUVsQztJQUF5Qiw4QkFBVztJQUFwQzs7SUFpQkEsQ0FBQztJQWRHLDZEQUF3QyxHQUF4QyxVQUF5QyxXQUEwQixFQUFFLGFBQXdDO1FBQ3pHLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEdBQUcsYUFBYSxDQUFDLENBQUE7UUFFMUUsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNkNBQXdCLEdBQXhCLFVBQXlCLFdBQTBCO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwrQ0FBMEIsR0FBMUIsVUFBMkIsV0FBMEI7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxXQUFXLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBZmEsd0JBQWEsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFnQjFELGlCQUFDO0NBQUEsQUFqQkQsQ0FBeUIsV0FBVyxHQWlCbkM7QUFDRCxpQkFBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFHMUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRTVDOzs7RUFHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYnVuZGxlLWNvbmZpZ1wiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuXG5hcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi5sYXVuY2hFdmVudCwgKGFyZ3MpID0+IHtcbiAgICBpZiAoYXJncy5hbmRyb2lkKSB7XG4gICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIGFuZHJvaWQuY29udGVudC5JbnRlbnQgY2xhc3MuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF1bmNoZWQgQW5kcm9pZCBhcHBsaWNhdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgaW50ZW50OiBcIiArIGFyZ3MuYW5kcm9pZCArIFwiLlwiKTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuaW9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gRm9yIGlPUyBhcHBsaWNhdGlvbnMsIGFyZ3MuaW9zIGlzIE5TRGljdGlvbmFyeSAobGF1bmNoT3B0aW9ucykuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF1bmNoZWQgaU9TIGFwcGxpY2F0aW9uIHdpdGggb3B0aW9uczogXCIgKyBhcmdzLmlvcyk7XG4gICAgfVxufSk7XG5cbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLnN1c3BlbmRFdmVudCwgKGFyZ3MpID0+IHtcbiAgICBpZiAoYXJncy5hbmRyb2lkKSB7XG4gICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIGFuZHJvaWQgYWN0aXZpdHkgY2xhc3MuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VTUEVORDogXCIgKyBhcmdzLmFuZHJvaWQpO1xuICAgIH0gZWxzZSBpZiAoYXJncy5pb3MpIHtcbiAgICAgICAgLy8gRm9yIGlPUyBhcHBsaWNhdGlvbnMsIGFyZ3MuaW9zIGlzIFVJQXBwbGljYXRpb24uXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VTUEVORCBFVkVOVDogXCIgKyBhcmdzLmlvcyk7XG4gICAgfVxufSk7XG5cbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLnJlc3VtZUV2ZW50LCAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgLy8gRm9yIEFuZHJvaWQgYXBwbGljYXRpb25zLCBhcmdzLmFuZHJvaWQgaXMgYW4gYW5kcm9pZCBhY3Rpdml0eSBjbGFzcy5cbiAgICAgICAgY29uc29sZS5sb2coXCJSRVNVTUU6IFwiICsgYXJncy5hbmRyb2lkKTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuaW9zKSB7XG4gICAgICAgIC8vIEZvciBpT1MgYXBwbGljYXRpb25zLCBhcmdzLmlvcyBpcyBVSUFwcGxpY2F0aW9uLlxuICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1VNRSBFVkVOVDogXCIgKyBhcmdzLmlvcyk7XG4gICAgfVxufSk7XG5cbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLmRpc3BsYXllZEV2ZW50LCAoYXJncykgPT4ge1xuICAgIC8vIGFyZ3MgaXMgb2YgdHlwZSBBcHBsaWNhaXRvbkV2ZW50RGF0YVxuICAgIGNvbnNvbGUubG9nKFwiZGlzcGxheWVkRXZlbnRcIik7XG59KTtcblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ub3JpZW50YXRpb25DaGFuZ2VkRXZlbnQsIChhcmdzKSA9PiB7XG4gICAgLy8gYXJncyBpcyBvZiB0eXBlIE9yaWVudGF0aW9uQ2hhbmdlZEV2ZW50RGF0YVxuICAgIGNvbnNvbGUubG9nKFwiT1JJRU5UQVRJT046IFwiLCBhcmdzLm5ld1ZhbHVlKTsgLy8gXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiLCBcInVua25vd25cIlxufSk7XG5cblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24uZXhpdEV2ZW50LCAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgLy8gRm9yIEFuZHJvaWQgYXBwbGljYXRpb25zLCBhcmdzLmFuZHJvaWQgaXMgYW4gYW5kcm9pZCBhY3Rpdml0eSBjbGFzcy5cbiAgICAgICAgY29uc29sZS5sb2coXCJFWElUOiBcIiArIGFyZ3MuYW5kcm9pZCk7XG4gICAgfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgVUlBcHBsaWNhdGlvbi5cbiAgICAgICAgY29uc29sZS5sb2coXCJFWElUIEVWRU5UOiBcIiArIGFyZ3MuaW9zKTtcbiAgICB9XG59KTtcblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubG93TWVtb3J5RXZlbnQsIChhcmdzKSA9PiB7XG4gICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkIGFjdGl2aXR5IGNsYXNzLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkxPVyBNRU1PUlk6IFwiICsgYXJncy5hbmRyb2lkKTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuaW9zKSB7XG4gICAgICAgIC8vIEZvciBpT1MgYXBwbGljYXRpb25zLCBhcmdzLmlvcyBpcyBVSUFwcGxpY2F0aW9uLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkxPVyBNRU1PUlk6IFwiICsgYXJncy5pb3MpO1xuICAgIH1cbn0pO1xuXG5hcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi51bmNhdWdodEVycm9yRXZlbnQsIChhcmdzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJVbmNhdWdodCBFcnJvcjogXCIgKyBhcmdzLmVycm9yKTtcbn0pO1xuXG5cbmltcG9ydCB7IGlvcyB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5jbGFzcyBNeURlbGVnYXRlIGV4dGVuZHMgVUlSZXNwb25kZXIgaW1wbGVtZW50cyBVSUFwcGxpY2F0aW9uRGVsZWdhdGUge1xuICAgIHB1YmxpYyBzdGF0aWMgT2JqQ1Byb3RvY29scyA9IFtVSUFwcGxpY2F0aW9uRGVsZWdhdGVdO1xuXG4gICAgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9ucyhhcHBsaWNhdGlvbjogVUlBcHBsaWNhdGlvbiwgbGF1bmNoT3B0aW9uczogTlNEaWN0aW9uYXJ5PHN0cmluZywgYW55Pik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFwcGxpY2F0aW9uV2lsbEZpbmlzaExhdW5jaGluZ1dpdGhPcHRpb25zOiBcIiArIGxhdW5jaE9wdGlvbnMpXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYXBwbGljYXRpb25XaWxsVGVybWluYXRlKGFwcGxpY2F0aW9uOiBVSUFwcGxpY2F0aW9uLCApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXSUxMIFRFUk1JTkFURSAhISFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwbGljYXRpb25XaWxsVGVybWluYXRlOiBcIiwgYXBwbGljYXRpb24pO1xuICAgIH1cblxuICAgIGFwcGxpY2F0aW9uRGlkQmVjb21lQWN0aXZlKGFwcGxpY2F0aW9uOiBVSUFwcGxpY2F0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwbGljYXRpb25EaWRCZWNvbWVBY3RpdmU6IFwiICsgYXBwbGljYXRpb24pXG4gICAgfVxufVxuaW9zLmRlbGVnYXRlID0gTXlEZWxlZ2F0ZTtcblxuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19