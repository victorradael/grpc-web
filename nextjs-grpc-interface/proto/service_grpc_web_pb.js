/**
 * @fileoverview gRPC-Web generated client stub for hero
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hero = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hero.HeroesServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hero.HeroesServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hero.HeroById,
 *   !proto.hero.Hero>}
 */
const methodDescriptor_HeroesService_FindOne = new grpc.web.MethodDescriptor(
  '/hero.HeroesService/FindOne',
  grpc.web.MethodType.UNARY,
  proto.hero.HeroById,
  proto.hero.Hero,
  /**
   * @param {!proto.hero.HeroById} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hero.Hero.deserializeBinary
);


/**
 * @param {!proto.hero.HeroById} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hero.Hero)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hero.Hero>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hero.HeroesServiceClient.prototype.findOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hero.HeroesService/FindOne',
      request,
      metadata || {},
      methodDescriptor_HeroesService_FindOne,
      callback);
};


/**
 * @param {!proto.hero.HeroById} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hero.Hero>}
 *     Promise that resolves to the response
 */
proto.hero.HeroesServicePromiseClient.prototype.findOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hero.HeroesService/FindOne',
      request,
      metadata || {},
      methodDescriptor_HeroesService_FindOne);
};


module.exports = proto.hero;

