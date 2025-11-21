//
//  RCTNativeLocalStorage.m
//  turboModuleDemo
//
//  Created by mac on 21/11/25.
//

#import "RCTNativeLocalStorage.h"

static NSString *const RCTNativeLocalStorageKey = @"local-storage";

@interface RCTNativeLocalStorage()
@property (strong, nonatomic) NSUserDefaults *localStorage;
@end


@implementation RCTNativeLocalStorage

RCT_EXPORT_MODULE(NativeLocalStorage)

- (id) init {
  if (self = [super init]) {
    _localStorage = [[NSUserDefaults alloc] initWithSuiteName:RCTNativeLocalStorageKey];
  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params { 
  return std::make_shared<facebook::react::NativeLocalStorageSpecJSI>(params);
}

- (void)clear { 
  NSDictionary *keys = [self.localStorage dictionaryRepresentation];
    for (NSString *key in keys) {
      [self removeItem:key];
    }
}

- (NSString * _Nullable)getItem:(nonnull NSString *)key { 
  return [self.localStorage stringForKey:key];
}

- (void)removeItem:(nonnull NSString *)key { 
  [self.localStorage removeObjectForKey:key];
}

- (void)setItem:(nonnull NSString *)value key:(nonnull NSString *)key { 
  [self.localStorage setObject:value forKey:key];
}

- (nonnull NSNumber *)add:(double)a b:(double)b {
  return @(a + b);
}

@end
