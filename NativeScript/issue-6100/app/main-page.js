"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable/observable");
function navigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var items = [
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
    ];
    vm.set("items", items);
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEVBQW9GO0FBS3BGLHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFMUIsSUFBSSxLQUFLLEdBQUc7UUFDUixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDakQsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMvQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqRCxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0MsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtLQUNsRCxDQUFDO0lBRUYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQWhDRCxvQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0ICogYXMgYnVpbGRlciBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2J1aWxkZXIvYnVpbGRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbiAgICBsZXQgaXRlbXMgPSBbXG4gICAgICAgIHsgc29tZU5hbWU6IFwiTmljayBJbGlldlwiLCBzb21lSm9iOiBcIlRTRVwiLCBpZDogMSB9LFxuICAgICAgICB7IHNvbWVOYW1lOiBcIk4uVHNvbmV2XCIsIHNvbWVKb2I6IFwiVFNFXCIsIGlkOiAyIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiVi5DaGltZXZcIiwgc29tZUpvYjogXCJEZXZcIiwgaWQ6IDMgfSxcbiAgICAgICAgeyBzb21lTmFtZTogXCJOaWNrIElsaWV2XCIsIHNvbWVKb2I6IFwiVFNFXCIsIGlkOiAxIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiTi5Uc29uZXZcIiwgc29tZUpvYjogXCJUU0VcIiwgaWQ6IDIgfSxcbiAgICAgICAgeyBzb21lTmFtZTogXCJOaWNrIElsaWV2XCIsIHNvbWVKb2I6IFwiVFNFXCIsIGlkOiAxIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiTi5Uc29uZXZcIiwgc29tZUpvYjogXCJUU0VcIiwgaWQ6IDIgfSxcbiAgICAgICAgeyBzb21lTmFtZTogXCJWLkNoaW1ldlwiLCBzb21lSm9iOiBcIkRldlwiLCBpZDogMyB9LFxuICAgICAgICB7IHNvbWVOYW1lOiBcIk5pY2sgSWxpZXZcIiwgc29tZUpvYjogXCJUU0VcIiwgaWQ6IDEgfSxcbiAgICAgICAgeyBzb21lTmFtZTogXCJOaWNrIElsaWV2XCIsIHNvbWVKb2I6IFwiVFNFXCIsIGlkOiAxIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiTmljayBJbGlldlwiLCBzb21lSm9iOiBcIlRTRVwiLCBpZDogMSB9LFxuICAgICAgICB7IHNvbWVOYW1lOiBcIk4uVHNvbmV2XCIsIHNvbWVKb2I6IFwiVFNFXCIsIGlkOiAyIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiVi5DaGltZXZcIiwgc29tZUpvYjogXCJEZXZcIiwgaWQ6IDMgfSxcbiAgICAgICAgeyBzb21lTmFtZTogXCJOLlRzb25ldlwiLCBzb21lSm9iOiBcIlRTRVwiLCBpZDogMiB9LFxuICAgICAgICB7IHNvbWVOYW1lOiBcIlYuQ2hpbWV2XCIsIHNvbWVKb2I6IFwiRGV2XCIsIGlkOiAzIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiTmljayBJbGlldlwiLCBzb21lSm9iOiBcIlRTRVwiLCBpZDogMSB9LFxuICAgICAgICB7IHNvbWVOYW1lOiBcIlYuQ2hpbWV2XCIsIHNvbWVKb2I6IFwiRGV2XCIsIGlkOiAzIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiTmljayBJbGlldlwiLCBzb21lSm9iOiBcIlRTRVwiLCBpZDogMSB9LFxuICAgICAgICB7IHNvbWVOYW1lOiBcIk4uVHNvbmV2XCIsIHNvbWVKb2I6IFwiVFNFXCIsIGlkOiAyIH0sXG4gICAgICAgIHsgc29tZU5hbWU6IFwiVi5DaGltZXZcIiwgc29tZUpvYjogXCJEZXZcIiwgaWQ6IDMgfSxcbiAgICAgICAgeyBzb21lTmFtZTogXCJWLkNoaW1ldlwiLCBzb21lSm9iOiBcIkRldlwiLCBpZDogMyB9LFxuICAgIF07XG5cbiAgICB2bS5zZXQoXCJpdGVtc1wiLCBpdGVtcyk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59Il19