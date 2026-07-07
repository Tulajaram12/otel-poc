'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-grpc');
const {
  OTLPMetricExporter,
} = require('@opentelemetry/exporter-metrics-otlp-grpc');

const sdk = new NodeSDK({
  serviceName: 'nodejs-otel-demo',

  traceExporter: new OTLPTraceExporter({
    url: 'http://otel-collector:4317',
  }),

  metricReader: undefined,

  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

console.log('OpenTelemetry Initialized');
